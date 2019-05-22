import forceNumber from '../src/forceNumber';

it('should force invalid values to 0', () => {
  expect(forceNumber()).toBe(0);
  expect(forceNumber(1)).toBe(1);
  expect(forceNumber("2")).toBe(2);
  expect(forceNumber("2.1")).toBe(2.1);
  expect(forceNumber(3.1)).toBe(3.1);
  expect(forceNumber(NaN)).toBe(0);
  expect(forceNumber(NaN, 3)).toBe(3);
});
