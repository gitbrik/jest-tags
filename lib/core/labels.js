const argv = require('minimist')(process.argv.slice(2));
const Filter = require('./filter');

function labels(...tagLabels) {
    const chain = {};

    const filterMatch = labels.filter(tagLabels);

    chain.test = filterMatch ? labels.global.test : labels.global.xtest;
    chain.test.only = labels.global.test.only;
    chain.test.skip = labels.global.test.skip;
    chain.xtest = labels.global.xtest;

    return chain;
}

labels.filter = new Filter(argv.labels);
labels.global = global;

module.exports = labels;
