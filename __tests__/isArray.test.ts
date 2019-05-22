import isArray from '../src/isArray';

it('should assert its an array', () => {
  expect(isArray([])).toBe(true);
});
