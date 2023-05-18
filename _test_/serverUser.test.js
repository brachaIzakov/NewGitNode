const serverusers = require("../Services/serverUsers")

test('Adding two numbers (2 + 3 = 5)', () => {
    expect(serverusers.sum(2,3)).toBe(5);
});