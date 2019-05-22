import isBoolean from '../src/isBoolean';

it('should ensure they are numbers', () => {
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(false)).toBe(true);
});
