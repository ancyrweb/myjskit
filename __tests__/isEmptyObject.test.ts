import isEmptyObject from '../src/isEmptyObject';

it('should assert its an empty object', () => {
  expect(isEmptyObject(null)).toBe(true);
  expect(isEmptyObject({})).toBe(true);
  expect(isEmptyObject([])).toBe(true);

  expect(isEmptyObject({ a: "foo" })).toBe(false);
  expect(isEmptyObject([0])).toBe(false);
});
