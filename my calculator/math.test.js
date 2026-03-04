const { add, subtract } = require('./math');

test('adds 10 + 20 to equal 30', () => {
  expect(add(10, 20)).toBe(30);
});

test('subtracts 50 - 20 to equal 30', () => {
  expect(subtract(50, 20)).toBe(30);
});