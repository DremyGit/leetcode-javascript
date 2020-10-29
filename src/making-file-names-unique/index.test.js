import getFolderNames from './';

describe('1487. Making File Names Unique:', () => {
  test('Example 1', () => {
    expect(getFolderNames(['pes', 'fifa', 'gta', 'pes(2019)'])).toEqual([
      'pes',
      'fifa',
      'gta',
      'pes(2019)',
    ]);
  });
  test('Example 2', () => {
    expect(getFolderNames(['gta', 'gta(1)', 'gta', 'avalon'])).toEqual([
      'gta',
      'gta(1)',
      'gta(2)',
      'avalon',
    ]);
  });
  test('Example 3', () => {
    expect(
        getFolderNames([
          'onepiece',
          'onepiece(1)',
          'onepiece(2)',
          'onepiece(3)',
          'onepiece',
        ])
    ).toEqual([
      'onepiece',
      'onepiece(1)',
      'onepiece(2)',
      'onepiece(3)',
      'onepiece(4)',
    ]);
  });
  test('Example 4', () => {
    expect(getFolderNames(['wano', 'wano', 'wano', 'wano'])).toEqual([
      'wano',
      'wano(1)',
      'wano(2)',
      'wano(3)',
    ]);
  });
  test('Example 5', () => {
    expect(getFolderNames(['kaido', 'kaido(1)', 'kaido', 'kaido(1)'])).toEqual([
      'kaido',
      'kaido(1)',
      'kaido(2)',
      'kaido(1)(1)',
    ]);
  });

  test('Example 6', () => {
    expect(
        getFolderNames(['abc(1)(1)', 'abc(1)', 'abc(1)(1)', 'abc(1)'])
    ).toEqual(['abc(1)(1)', 'abc(1)', 'abc(1)(1)(1)', 'abc(1)(2)']);
  });
});
