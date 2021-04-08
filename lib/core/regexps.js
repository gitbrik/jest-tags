const {NOT_SYMBOL, AND_SYMBOL, OR_SYMBOL} = require("./config");

const escape = str => str.split('').map(symbol => `\\${symbol}`).join('');

const AND_REGX = new RegExp(`\\s*${escape(AND_SYMBOL)}\\s*`);

const OR_REGX = new RegExp(`\\s*${escape(OR_SYMBOL)}\\s*`);

const PLAIN_REGX = new RegExp('\\s+');

const BAD_REGX = new RegExp(`^${escape(NOT_SYMBOL)}.*$`);

const GOOD_REGX = new RegExp(`^[^${escape(NOT_SYMBOL)}].*$`);

module.exports = {
    AND_REGX,
    OR_REGX,
    PLAIN_REGX,
    BAD_REGX,
    GOOD_REGX
};
