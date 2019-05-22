import isString from '../src/isString';

it('should return true', () => {
  expect(isString("hey")).toBe(true);
});
