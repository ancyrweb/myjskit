import mapToArray from '../src/mapToArray';

it('Map over all the properties of the object', () => {
  const obj = { a: 10, b: 12 };
  const mapped = mapToArray(obj, (value) => {
    return value + 1;
  });

  expect(mapped).toEqual([11, 13]);
});
