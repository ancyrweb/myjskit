import forceString from '../src/forceString';

it('should force invalid values to 0', () => {
  expect(forceString()).toBe("");
  expect(forceString(1)).toBe("1");
  expect(forceString(2.1)).toBe("2.1");
  expect(forceString("2")).toBe("2");
  expect(forceString(NaN)).toBe("");
  expect(forceString(null, "test")).toBe("test");
});
