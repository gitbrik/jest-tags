const {getJestPassedParams} = require("../utils");
const {RESERVED_COMMANDS } = require("../config");


describe("getJestPassedParams test", () => {
    test("it should not return reserved lib commands", () => {

        const commands = ['--labels', 'label1 label2', '--collectCoverage', '-a'];

        const result = getJestPassedParams(commands);
        RESERVED_COMMANDS.forEach(command => {
            expect(result).not.toContain(command);
        });
    });
    test("it should not return command`s params (not started from `-` params)", () => {

        const commands = ['--labels', 'label1 label2', '--collectCoverage', '-a'];

        const result = getJestPassedParams(commands);

        expect(result).not.toContain('label1');
        expect(result).not.toContain('label2');
    });
    test("it should return commands that are not reserved", () => {

        const commands = ['--anyparam111', 'label1 label2', '--collectCoverage', '-a'];

        const result = getJestPassedParams(commands);

        expect(result).toContain('--anyparam111');
    });
});
