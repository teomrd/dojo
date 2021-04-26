const {
  getArrayCombinations,
  combineOf,
  combineAll
} = require('./getArrayCombinations');

describe('getArrayCombinations', () => {
  describe('combineOf', () => {
    it('should combine the elements of the first array with each one of the elements of the 2nd array', () => {
      expect(combineOf(['a'], ['b','c','d','e'])).toEqual([
        ['a','b'],
        ['a','c'],
        ['a','d'],
        ['a','e'],
      ]);

      expect(combineOf(['a','b'], ['c','d'])).toEqual([
        ['a','b','c'],
        ['a','b','d'],
      ]);

      expect(combineOf(['a','b'], [])).toEqual([
      ]);
    });
  });

  describe('combineAll', () => {
    it('should find all elements combinations, of a given size, with another', () => {
      expect(combineAll('a', ['b','c','d','e'], 3)).toEqual(
        [
          ['a','b','c'],
          ['a','b','d'],
          ['a','b','e'],

          ['a','c','d'],
          ['a','c','e'],

          ['a','d','e'],
        ]
      );

      expect(combineAll('a', ['b','c','d'], 4)).toEqual(
        [
          ['a','b','c','d'],
        ]
      );

      expect(combineAll('a', ['b','c'], 2)).toEqual(
        [
          ['a','b'],
          ['a','c'],
        ]
      );

      expect(combineAll('a', ['b'], 1)).toEqual(
        [
        ]
      );
    });
    
  });
  
  it('should return combinations of the elements of an array in arrays of 2', () => {
    const actual = getArrayCombinations(['a', 'b', 'c'], 2);

    expect(actual).toEqual(
      [
        ['a','b'],
        ['a','c'],
        ['b','c'],
      ]
    )
  });

  it('should return combinations of the elements of an array in arrays of 3', () => {
    const actual = getArrayCombinations(['a', 'b', 'c', 'd'], 3);

    expect(actual).toEqual(
      [
        ['a','b','c'],
        ['a','b','d'],

        ['a','c','d'],
        
        ['b','c','d'],
      ]
    )
  });
});

