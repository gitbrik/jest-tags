const {NOT_SYMBOL, AND_SYMBOL, OR_SYMBOL} = require("./config");
const {PLAIN_REGX, GOOD_REGX, AND_REGX, OR_REGX, BAD_REGX} = require("./regexps");

// f.e. tag1 !tag2
// tag1 && tag2 && !tag3
// tag1 || tag2 || !tag3

//ATTENTION!!: cases with () not handled: f.e. (tag1 && tag2) || tag3 won`t work

const matchFilter = str => labels => {
    if (typeof labels === 'string') {
        labels = [labels];
    }
    if (str.includes(OR_SYMBOL)) {
        const include = goodLabels(str.split(OR_REGX));
        const exclude = badLabels(str.split(OR_REGX));
        if (exclude.length === 0) {
            return (include.length === 0 || include.some(s => labels.includes(s)));
        }
        if (include.length === 0 && exclude.length !== 0) {
            return exclude.some(s => !labels.includes(s));
        }
        return (include.length === 0 || include.some(s => labels.includes(s))) || exclude.some(s => !labels.includes(s));
    }
    if (str.includes(AND_SYMBOL)) {
        const include = goodLabels(str.split(AND_REGX));
        const exclude = badLabels(str.split(AND_REGX));

        return (include.length === 0 || include.every(s => labels.includes(s))) && !exclude.some(s => labels.includes(s));
    }
    const include = goodLabels(str.split(PLAIN_REGX));
    const exclude = badLabels(str.split(PLAIN_REGX));

    return (include.length === 0 || include.some(s => labels.includes(s))) && !exclude.some(s => labels.includes(s));
};

const goodLabels = (arr) => {
    return arr.filter(s => s.match(GOOD_REGX));
};

const badLabels = (arr) => {
    return arr.filter(s => s.match(BAD_REGX)).map(s => s.replace(NOT_SYMBOL, ''));
};

module.exports = function Filter(search) {
    const str = (search || '').trim();

    return matchFilter(str);
};
