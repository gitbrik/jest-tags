const {getJestPassedParams} = require("../utils");
const {RESERVED_COMMANDS } = require("../config");


describe("getJestPassedParams test", () => {
    test("it should not return reserved lib commands", () => {

        const commands = ['--tags', 'tag1 tag2', '--collectCoverage', '-a'];

        const result = getJestPassedParams(commands);
        RESERVED_COMMANDS.forEach(command => {
            expect(result).not.toContain(command);
        });
    });
    test("it should not return command`s params (not started from `-` params)", () => {

        const commands = ['--tags', 'tag1 tag2', '--collectCoverage', '-a'];

        const result = getJestPassedParams(commands);

        expect(result).not.toContain('tag1');
        expect(result).not.toContain('tag2');
    });
    test("it should return commands that are not reserved", () => {

        const commands = ['--anyparam111', 'tag1 tag2', '--collectCoverage', '-a'];

        const result = getJestPassedParams(commands);

        expect(result).toContain('--anyparam111');
    });
});
