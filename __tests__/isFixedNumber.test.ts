import isFixedNumber from '../src/isFixedNumber';

it('should assert its an array', () => {
  expect(isFixedNumber(2)).toBe(true);
  expect(isFixedNumber(2.0)).toBe(true);
  expect(isFixedNumber(2.1)).toBe(false);
});
