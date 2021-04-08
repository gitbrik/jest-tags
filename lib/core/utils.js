const {RESERVED_COMMANDS} = require("./config");

module.exports = {
    getJestPassedParams: (argv) => {
        return [...argv].filter(prop => {
            return prop.startsWith("-") && RESERVED_COMMANDS.every(command => command !== prop)
        });
    }
};
