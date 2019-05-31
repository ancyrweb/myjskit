import flatten from '../src/flatten';

it('should flatten the array', () => {
  expect(flatten([
    [1, 2, [3, [4, 5, [6, 7], 8], 9]]
  ])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
