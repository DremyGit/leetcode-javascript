import RandomizedSet from './';

describe('380. Insert Delete GetRandom O(1):', () => {
  test('Example 1', () => {
    const randomSet = new RandomizedSet();
    expect(randomSet.insert(1)).toBe(true);
    expect(randomSet.remove(2)).toBe(false);
    expect(randomSet.insert(2)).toBe(true);
    jest.spyOn(global.Math, 'random').mockReturnValueOnce(0.1);
    expect(randomSet.getRandom()).toBe(1);
    jest.spyOn(global.Math, 'random').mockReturnValueOnce(0.9);
    expect(randomSet.getRandom()).toBe(2);

    expect(randomSet.remove(1)).toBe(true);
    expect(randomSet.insert(2)).toBe(false);
    jest.spyOn(global.Math, 'random').mockReturnValueOnce(0.1);
    expect(randomSet.getRandom()).toBe(2);
    jest.spyOn(global.Math, 'random').mockReturnValueOnce(0.9);
    expect(randomSet.getRandom()).toBe(2);
  });
});
