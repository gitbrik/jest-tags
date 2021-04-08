const {AND_SYMBOL, OR_SYMBOL, NOT_SYMBOL} = require("../config");
const {OR_REGX, AND_REGX, BAD_REGX, GOOD_REGX} = require("../regexps");


describe("OR regexp", () => {
    test("it should split labels by OR symbol", () => {
        const labels = `auth ${OR_SYMBOL} login ${OR_SYMBOL} registration`;
        const result = labels.split(OR_REGX);

        expect(result).toContain('auth');
        expect(result).toContain('login');
        expect(result).toContain('registration');
        expect(result.length).toBe(3);
    });

    test("it should trim values", () => {
        const labels = `auth ${OR_SYMBOL}       login          ${OR_SYMBOL} registration`;
        const result = labels.split(OR_REGX);

        expect(result).toContain('auth');
        expect(result).toContain('login');
        expect(result).toContain('registration');
        expect(result.length).toBe(3);
    });
});

describe("AND regexp", () => {
    test("it should split labels by AND symbol", () => {
        const labels = `label1 ${AND_SYMBOL} label2 ${AND_SYMBOL} label3${AND_SYMBOL}label4`;
        const result = labels.split(AND_REGX);

        expect(result).toContain('label1');
        expect(result).toContain('label2');
        expect(result).toContain('label3');
        expect(result).toContain('label4');
        expect(result.length).toBe(4);
    });

    test("it should trim values", () => {
        const labels = `label1 ${AND_SYMBOL}       label2          ${AND_SYMBOL} label3`;
        const result = labels.split(AND_REGX);

        expect(result).toContain('label1');
        expect(result).toContain('label2');
        expect(result).toContain('label3');
        expect(result.length).toBe(3);
    });
});

describe("BAD regexp", () => {
    test("it should match only labels, that starts with NOT symbol", () => {
        const labels = `goodLabel ${NOT_SYMBOL}badLabel1 goodLabel2 ${NOT_SYMBOL}badLabel2`;

        const result = labels.split(' ').filter(str => str.match(BAD_REGX));

        expect(result).toContain(NOT_SYMBOL + 'badLabel1');
        expect(result).toContain(NOT_SYMBOL + 'badLabel2');
        expect(result).not.toContain('goodLabel2');
        expect(result).not.toContain('goodLabel');
        expect(result.length).toBe(2);
    });
});

describe("GOOD regexp", () => {
    test("it should match only labels, that dont starts with NOT symbol", () => {
        const labels = `goodLabel ${NOT_SYMBOL}badLabel1 goodLabel2 ${NOT_SYMBOL}badLabel2`;

        const result = labels.split(' ').filter(str => str.match(GOOD_REGX));

        expect(result).not.toContain(NOT_SYMBOL + 'badLabel1');
        expect(result).not.toContain(NOT_SYMBOL + 'badLabel2');
        expect(result).toContain('goodLabel2');
        expect(result).toContain('goodLabel');
        expect(result.length).toBe(2);
    });
});
