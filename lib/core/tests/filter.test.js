const {NOT_SYMBOL, AND_SYMBOL,OR_SYMBOL } = require("../config");
const filter = require("../filter");

describe("Filter test", () => {

    test("`auth login reg` should match `auth` search", () => {

        const search = `auth`;

        const result = filter(search)(['auth', 'login', 'reg']);
        expect(result).toBeTruthy();
    });

    test("`auth login reg` should not match `aut` search", () => {

        const search = `aut`;

        const result = filter(search)(['auth', 'login', 'reg']);
        expect(result).toBeFalsy();
    });

    test("`auth login reg` should match `auth and login and reg` search", () => {

        const search = `auth ${AND_SYMBOL} login ${AND_SYMBOL} reg`;

        const result = filter(search)(['auth', 'login', 'reg']);
        expect(result).toBeTruthy();
    });

    test("`auth login reg` should not match `not auth and not login and not reg` search", () => {

        const search = `${NOT_SYMBOL}auth ${AND_SYMBOL} ${NOT_SYMBOL}login ${AND_SYMBOL} ${NOT_SYMBOL}reg`;

        const result = filter(search)(['auth', 'login', 'reg']);
        expect(result).toBeFalsy();
    });

    test("`auth login reg` should match `reg login` search", () => {

        const search = `reg login`;

        const result = filter(search)(['auth', 'login', 'reg']);
        expect(result).toBeTruthy();
    });

    test("`auth registration` should match `auth and not login` search", () => {

        const search = `auth ${AND_SYMBOL} ${NOT_SYMBOL}login`;

        const result = filter(search)(['auth', 'registration']);
        expect(result).toBeTruthy();
    });

    test("`auth login` should not match `auth and not login` search", () => {

        const search = `auth ${AND_SYMBOL} ${NOT_SYMBOL}login`;

        const result = filter(search)(['auth', 'login']);
        expect(result).toBeFalsy();
    });

    test("`registration` should match `registration or login` search", () => {

        const search = `registration ${OR_SYMBOL} login`;

        const result = filter(search)(['registration']);
        expect(result).toBeTruthy();
    });


    test("`auth login reg` should not match `registration and auth` search", () => {

        const search = `registration ${AND_SYMBOL} auth`;

        const result = filter(search)(['auth', 'login', 'reg']);
        expect(result).toBeFalsy();
    });
});
