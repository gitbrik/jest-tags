const {NOT_SYMBOL, AND_SYMBOL, OR_SYMBOL} = require("./config");
const {PLAIN_REGX, GOOD_REGX, AND_REGX, OR_REGX, BAD_REGX} = require("./regexps");

// f.e. tag1 !tag2
// tag1 && tag2 && !tag3
// tag1 || tag2 || !tag3

//ATTENTION!!: cases with () not handled: f.e. (tag1 && tag2) || tag3 won`t work

const matchFilter = str => tags => {
    if (typeof tags === 'string') {
        tags = [tags];
    }
    if (str.includes(OR_SYMBOL)) {
        const include = goodTags(str.split(OR_REGX));
        const exclude = badTags(str.split(OR_REGX));
        if (exclude.length === 0) {
            return (include.length === 0 || include.some(s => tags.includes(s)));
        }
        if (include.length === 0 && exclude.length !== 0) {
            return exclude.some(s => !tags.includes(s));
        }
        return (include.length === 0 || include.some(s => tags.includes(s))) || exclude.some(s => !tags.includes(s));
    }
    if (str.includes(AND_SYMBOL)) {
        const include = goodTags(str.split(AND_REGX));
        const exclude = badTags(str.split(AND_REGX));

        return (include.length === 0 || include.every(s => tags.includes(s))) && !exclude.some(s => tags.includes(s));
    }
    const include = goodTags(str.split(PLAIN_REGX));
    const exclude = badTags(str.split(PLAIN_REGX));

    return (include.length === 0 || include.some(s => tags.includes(s))) && !exclude.some(s => tags.includes(s));
};

const goodTags = (arr) => {
    return arr.filter(s => s.match(GOOD_REGX));
};

const badTags = (arr) => {
    return arr.filter(s => s.match(BAD_REGX)).map(s => s.replace(NOT_SYMBOL, ''));
};

module.exports = function Filter(search) {
    const str = (search || '').trim();

    return matchFilter(str);
};
