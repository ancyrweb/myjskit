import objectMap from '../src/objectMap';

it('Map over all the properties of the object', () => {
  const obj = { a: 10, b: 12 };
  const mapped = objectMap(obj, (value) => {
    return value + 1;
  });

  expect(mapped).toEqual({ a: 11, b: 13 });
});
