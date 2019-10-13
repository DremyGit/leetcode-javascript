import findRestaurant from './';

describe('599. Minimum Index Sum of Two Lists:', () => {
  test('Example 1', () => {
    expect(
        findRestaurant(
            ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
            [
              'Piatti',
              'The Grill at Torrey Pines',
              'Hungry Hunter Steakhouse',
              'Shogun',
            ]
        )
    ).toEqual(['Shogun']);
  });

  test('Example 2', () => {
    expect(
        findRestaurant(
            ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
            ['KFC', 'Shogun', 'Burger King']
        )
    ).toEqual(['Shogun']);
    // ).toContainEqual('Shogun', 'KFC');
  });

  test('Multi', () => {
    expect(
        findRestaurant(
            ['KFC', 'Shogun', 'Burger King'],
            ['Shogun', 'KFC', 'Tapioca Express', 'Burger King']
        )
    ).toEqual(['Shogun', 'KFC']);
  });
});
