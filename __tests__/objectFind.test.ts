import objectFind from '../src/objectFind';

it('should return the found object by value', () => {
  const obj = { a: 10, b: 12 };
  const found = objectFind(obj, value => value === 12);

  expect(found).toBe(12);
});

it('should return the found object by key', () => {
  const obj = { a: 10, b: 12 };
  const found = objectFind(obj, (value, key) => key === "a");

  expect(found).toBe(10);
});
