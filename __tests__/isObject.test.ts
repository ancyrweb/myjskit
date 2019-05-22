import isObject from '../src/isObject';

it('should assert its an array', () => {
  expect(isObject(null)).toBe(false);
  expect(isObject([])).toBe(true);
  expect(isObject({})).toBe(true);
});
