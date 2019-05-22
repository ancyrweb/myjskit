import objectFilter from '../src/objectFilter';

it('filter the unwanted properties', () => {
  const obj = { a: 10, b: 12 };
  const mapped = objectFilter(obj, (value) => {
    return value === 12;
  });

  expect(mapped).toEqual({ b: 12 });
});
