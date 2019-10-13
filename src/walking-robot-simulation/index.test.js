import robotSim from './';

describe('874. Walking Robot Simulation:', () => {
  test('Example 1', () => {
    expect(robotSim([4, -1, 3], [])).toBe(25);
  });
  test('Example 2', () => {
    expect(robotSim([4, -1, 4, -2, 4], [[2, 4], [-1, 4]])).toBe(65);
  });
  test('Example 3', () => {
    expect(
        robotSim(
            [7, -2, -2, 7, 5],
            [
              [-3, 2],
              [-2, 1],
              [0, 1],
              [-2, 4],
              [-1, 0],
              [-2, -3],
              [0, -3],
              [4, 4],
              [-3, 3],
              [2, 2],
            ]
        )
    ).toBe(4);
  });
  test('Example 4', () => {
    expect(
        robotSim(
            [2, 2, 5, -1, -1],
            [
              [-3, 5],
              [-2, 5],
              [3, 2],
              [5, 0],
              [-2, 0],
              [-1, 5],
              [5, -3],
              [0, 0],
              [-4, 4],
              [-3, 4],
            ]
        )
    ).toBe(81);
  });
  test('Example 5', () => {
    expect(
        robotSim(
            [-2, 1, 2],
            [
              [10, 0],
              [-10, 0],
            ]
        )
    ).toBe(9);
  });
});

// [28, 66] || [36, 62]
