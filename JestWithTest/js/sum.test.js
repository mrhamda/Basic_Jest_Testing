const sum = require('./add')

test('properly add two numbers', () => {
    expect(
        sum(1, 2)
    ).toBe(3)
})