const {labels} = require('jest-labels');

labels("hoho2", "hoho12").test('main test', () => {
    expect(3+4).toBe(7);
});

labels("hoho2").test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

labels("hoho12").test('werwerwer', () => {
    expect(3+20).toBe(23);
});

labels("hoho3").test('dsadefewl;', () => {
    expect(3+20).toBe(23);
});
