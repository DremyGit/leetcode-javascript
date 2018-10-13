import minSteps from './';

test('1', () => {
  expect(minSteps(1)).toBe(0);
});

test('prime number', () => {
  expect(minSteps(2)).toBe(2);
  expect(minSteps(3)).toBe(3);
});

test('composite number', () => {
  expect(minSteps(6)).toBe(5);
  expect(minSteps(12)).toBe(7);
  expect(minSteps(120)).toBe(14);
});

