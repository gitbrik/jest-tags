const {AND_SYMBOL, OR_SYMBOL, NOT_SYMBOL} = require("../config");
const {OR_REGX, AND_REGX, BAD_REGX, GOOD_REGX} = require("../regexps");


describe("OR regexp", () => {
    test("it should split tags by OR symbol", () => {
        const tags = `auth ${OR_SYMBOL} login ${OR_SYMBOL} registration`;
        const result = tags.split(OR_REGX);

        expect(result).toContain('auth');
        expect(result).toContain('login');
        expect(result).toContain('registration');
        expect(result.length).toBe(3);
    });

    test("it should trim values", () => {
        const tags = `auth ${OR_SYMBOL}       login          ${OR_SYMBOL} registration`;
        const result = tags.split(OR_REGX);

        expect(result).toContain('auth');
        expect(result).toContain('login');
        expect(result).toContain('registration');
        expect(result.length).toBe(3);
    });
});

describe("AND regexp", () => {
    test("it should split tags by AND symbol", () => {
        const tags = `tag1 ${AND_SYMBOL} tag2 ${AND_SYMBOL} tag3${AND_SYMBOL}tag4`;
        const result = tags.split(AND_REGX);

        expect(result).toContain('tag1');
        expect(result).toContain('tag2');
        expect(result).toContain('tag3');
        expect(result).toContain('tag4');
        expect(result.length).toBe(4);
    });

    test("it should trim values", () => {
        const tags = `tag1 ${AND_SYMBOL}       tag2          ${AND_SYMBOL} label3`;
        const result = tags.split(AND_REGX);

        expect(result).toContain('tag1');
        expect(result).toContain('tag2');
        expect(result).toContain('tag3');
        expect(result.length).toBe(3);
    });
});

describe("BAD regexp", () => {
    test("it should match only tags, that starts with NOT symbol", () => {
        const tags = `goodTag ${NOT_SYMBOL}badTag1 goodTag2 ${NOT_SYMBOL}badTag2`;

        const result = tags.split(' ').filter(str => str.match(BAD_REGX));

        expect(result).toContain(NOT_SYMBOL + 'badTag1');
        expect(result).toContain(NOT_SYMBOL + 'badTag2');
        expect(result).not.toContain('goodTag2');
        expect(result).not.toContain('goodTag');
        expect(result.length).toBe(2);
    });
});

describe("GOOD regexp", () => {
    test("it should match only tags, that dont starts with NOT symbol", () => {
        const tags = `goodTag ${NOT_SYMBOL}badTag1 goodTag2 ${NOT_SYMBOL}badTag2`;

        const result = tags.split(' ').filter(str => str.match(GOOD_REGX));

        expect(result).not.toContain(NOT_SYMBOL + 'badTag1');
        expect(result).not.toContain(NOT_SYMBOL + 'badTag2');
        expect(result).toContain('goodTag2');
        expect(result).toContain('goodTag');
        expect(result.length).toBe(2);
    });
});
