const square = require('./square');

test('square(1) should be return 1', () => {
    expect(square(1).toBe(1));
});

test('square(-8) should be return error', () => {
    expect(square(-8).toBe("error number is negative"));
});

test('square("a") should be return -1', () => {
    expect(square("a").toBe(-1));
});