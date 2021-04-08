const {run} = require('jest-cli');
const labels = require('./core/labels');
const {getJestPassedParams} = require("./core/utils");

const params = getJestPassedParams(process.argv);

module.exports = {
    run: () => run(params),
    labels: labels,
};

//you can run for example yarn test --labels "hoho" --collectCoverage
// and collectCoverage will be passed to jest
