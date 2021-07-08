import {
  changeCase,
  filterNonUnique,
  alphabetSort,
  getSecondMinimum,
  doubleEveryEven,
  getArrayElementsPairs,
  deepEqual,
  formatDate,
} from './index';

describe.skip('Module 1', () => {
  describe('changeCase', () => {
    it('should change the capitalization of all letters in a given string', () => {
      expect(changeCase('Hybris😹')).toBe('hYBRIS😹');
      expect(changeCase('21century')).toBe('21CENTURY');
      expect(changeCase('Hybris')).toBe('hYBRIS');
      expect(changeCase('Hyß𐐓is')).toBe('hYSS𐐻IS');
    });
  });

  describe('filterNonUnique', () => {
    it('should filter out non-unique values in an array', () => {
      expect(filterNonUnique([1, 2, 2, 2, 3, 4, 4, 5])).toEqual([1, 3, 5]);
      expect(filterNonUnique([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
      expect(filterNonUnique([])).toEqual([]);
      expect(filterNonUnique([1, "2", 2, 2, 3, 4, 4, 5])).toEqual([1, "2", 3, 5]);
    });
  });

  describe('alphabetSort', () => {
    it('should accept a string type only', () => {
      expect(() => alphabetSort()).toThrow();
      expect(() => alphabetSort('Text')).not.toThrow();
    });

    it('should convert the letters of a given string in alphabetical order', () => {
      expect(alphabetSort('Python')).toBe('Phnoty');
    });
  });

  describe('getSecondMinimum', () => {
    it('should get array of integers and return second minimum value', () => {
      expect(getSecondMinimum([5, 0, 7, 3, 8])).toBe(3);
      expect(getSecondMinimum([1, 1, 2, 3, 4, 5])).toBe(2);
      expect(getSecondMinimum([5, 4, 3, 2, 1])).toBe(2);
      expect(getSecondMinimum([5, 4, 0, -0, 1])).toBe(1);
    });
  });

  describe('doubleEveryEven', () => {
    it('should get array of integers and return another array of integers where every even number is doubled', () => {
      expect(doubleEveryEven([2, 0, 7, 3, 8, 4])).toEqual([4, 0, 7, 3, 16, 8]);
      expect(doubleEveryEven([-2, 0, -7, 3, 8, 4])).toEqual([-4, 0, -7, 3, 16, 8]);
    });
  });

  describe('getArrayElementsPairs', () => {
    it('should get two arrays and return array containing each possible pair from the arrays', () => {
      expect(getArrayElementsPairs([1, 2], ['a', 'b'])).toEqual([[1, "a"], [1, "b"], [2, "a"], [2, "b"]]);
    });
  });

  describe('deepEqual', () => {
    let obj = { here: { is: "an" }, object: 2 };
    it('should get two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal', () => {
      expect(deepEqual(obj, obj)).toEqual(true);
      expect(deepEqual(obj, { here: 1, object: 2 })).toEqual(false);
      expect(deepEqual(obj, { here: { is: "an" }, object: 2 })).toEqual(true);
      expect(deepEqual(obj, { here: { is: "an", has: "an" }, object: 2 })).toEqual(false);
      expect(deepEqual(obj, { here: { is: null }, object: undefined })).toEqual(false);
    });
  });

  describe('formatDate', () => {
    it('should take parameter of different types and returns date in ‘dd.mm.yy’ format', () => {
      expect(formatDate('2011-10-02')).toEqual('02.10.11');
      expect(formatDate(1234567890000)).toEqual('13.02.09');
      expect(formatDate([2014, 0, 1])).toEqual('01.01.14');
      expect(formatDate(new Date(2014, 0, 1))).toEqual('01.01.14');
      expect(formatDate(1234567890000n)).toEqual(NaN);
      expect(formatDate(10000000000000000)).toEqual(NaN);
      expect(formatDate(undefined)).toEqual(NaN);
      expect(formatDate(null)).toEqual(NaN);
      expect(formatDate(NaN)).toEqual(NaN);
    });
  });
});
