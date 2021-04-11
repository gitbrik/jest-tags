const argv = require('minimist')(process.argv.slice(2));
const Filter = require('./filter');

function tags(...tagLabels) {
    const chain = {};

    const filterMatch = tags.filter(tagLabels);

    chain.test = filterMatch ? tags.global.test : tags.global.xtest;
    chain.test.only = tags.global.test.only;
    chain.test.skip = tags.global.test.skip;
    chain.xtest = tags.global.xtest;

    return chain;
}

tags.filter = new Filter(argv.tags);
tags.global = global;

module.exports = tags;
