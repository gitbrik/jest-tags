const {run} = require('jest-cli');
const tags = require('./core/tags');
const {getJestPassedParams} = require("./core/utils");

const params = getJestPassedParams(process.argv);

module.exports = {
    run: () => run(params),
    tags: tags,
};

//you can run for example yarn test --labels "hoho" --collectCoverage
// and collectCoverage will be passed to jest
