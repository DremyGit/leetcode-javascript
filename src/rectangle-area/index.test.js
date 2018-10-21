import computeArea from './';

test('角重叠', () => {
  const params = [-3, 0, 3, 4, 0, -1, 9, 2];
  expect(computeArea(...params)).toBe(45);
});

test('全部重叠', () => {
  const params = [-1, -1, 1, 1, -1, -1, 1, 1];
  expect(computeArea(...params)).toBe(4);
});

test('内部重叠 1', () => {
  const params = [-1, -1, 1, 1, -2, -2, 2, 2];
  expect(computeArea(...params)).toBe(16);
});

test('内部重叠 2', () => {
  const params = [-2, -2, 2, 2, -1, -1, 1, 1];
  expect(computeArea(...params)).toBe(16);
});

test('内部重叠 3', () => {
  const params = [-5, -2, 5, 1, -3, -3, 3, 3];
  expect(computeArea(...params)).toBe(48);
});

test('内部重叠 4', () => {
  const params = [-2, -5, 1, 5, -3, -3, 3, 3];
  expect(computeArea(...params)).toBe(48);
});

test('未重叠', () => {
  const params = [-1, 0, 0, 1, 1, 0, 2, 1];
  expect(computeArea(...params)).toBe(2);
});
