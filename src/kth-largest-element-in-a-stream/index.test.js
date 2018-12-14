import KthLargest from './';

test('Example 1', () => {
  const kthLargest = Object.create(KthLargest).createNew(3, [4, 5, 8, 2]);
  expect(kthLargest.add(5)).toBe(5);
  expect(kthLargest.add(10)).toBe(5);
  expect(kthLargest.add(9)).toBe(8);
  expect(kthLargest.add(4)).toBe(8);
});

test('Example 2', () => {
  const kthLargest = Object.create(KthLargest).createNew(3, []);
  expect(kthLargest.add(4)).toBe(4);
  expect(kthLargest.add(5)).toBe(4);
  expect(kthLargest.add(8)).toBe(4);
  expect(kthLargest.add(2)).toBe(4);
  expect(kthLargest.add(5)).toBe(5);
  expect(kthLargest.add(10)).toBe(5);
  expect(kthLargest.add(9)).toBe(8);
  expect(kthLargest.add(4)).toBe(8);
});

test('Example 3', () => {
  const kthLargest = Object.create(KthLargest).createNew(2, [0]);
  expect(kthLargest.add(-1)).toBe(-1);
  expect(kthLargest.add(1)).toBe(0);
  expect(kthLargest.add(-2)).toBe(0);
  expect(kthLargest.add(-4)).toBe(0);
  expect(kthLargest.add(3)).toBe(1);
});
