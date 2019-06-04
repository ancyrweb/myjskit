import createArray from '../src/createArray';

it('should create an array of 5 elements', () => {
  expect(createArray(5)).toEqual([null, null, null, null, null]);
});
