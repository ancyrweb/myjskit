import applySchema from '../src/applySchema';

it('it should return the schema basically', () => {
  const schema = { username: "john", age: 18 };
  expect(applySchema(schema, {})).toEqual({ username: "john", age: 18 });
});

it('it should not keep unwanted fields', () => {
  const schema = { username: "john", age: 18 };
  expect(applySchema(schema, { foo: "bar" })).toEqual({ username: "john", age: 18 });
});
