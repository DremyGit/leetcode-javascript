import MyHashMap from './';

test('Example 1', () => {
  const hashMap = Object.create(MyHashMap).createNew();
  hashMap.put(1, 1);
  hashMap.put(2, 2);
  expect(hashMap.get(1)).toBe(1);
  expect(hashMap.get(3)).toBe(-1);
  hashMap.put(2, 0);
  expect(hashMap.get(2)).toBe(0);
  hashMap.remove(2);
  expect(hashMap.get(2)).toBe(-1);
});
