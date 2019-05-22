import isNumber from '../src/isNumber';

it('should ensure they are numbers', () => {
  expect(isNumber(NaN)).toBe(false);
  expect(isNumber(null)).toBe(false);
  expect(isNumber()).toBe(false);
  expect(isNumber("1")).toBe(false);

  expect(isNumber(0)).toBe(true);
  expect(isNumber(0.01)).toBe(true);
})
