import findRepeatedDnaSequences from './';

test('Example 1', () => {
  expect(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'))
      .toEqual(['AAAAACCCCC', 'CCCCCAAAAA']);
});

test('Example 2', () => {
  expect(findRepeatedDnaSequences('AAA'))
      .toEqual([]);
});

test('Example 3', () => {
  expect(findRepeatedDnaSequences('AAAAAAAAAAAAAAAAAAAA'))
      .toEqual(['AAAAAAAAAA']);
});
