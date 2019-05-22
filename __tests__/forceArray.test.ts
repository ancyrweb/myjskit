import forceArray from '../src/forceArray';

it('should force invalid values to 0', () => {
  expect(forceArray()).toEqual([]);
  expect(forceArray(["foo", "bar"])).toEqual(["foo", "bar"]);
  expect(forceArray({})).toEqual([]);
});
