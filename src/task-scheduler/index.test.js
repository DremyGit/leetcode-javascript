import leastInterval from './';

describe('621. Task Scheduler:', () => {
  test('Example 1', () => {
    expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8);
  });
  test('Example 2', () => {
    expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0)).toBe(6);
  });
  test('Example 3', () => {
    expect(leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2)).toBe(16);
  });
});
