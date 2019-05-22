import deepFreeze from '../src/deepFreeze';

it('should throw when trying to mutate a frozen object property', () => {
  const obj : any = { a: "foo", b: "bar" };

  deepFreeze(obj);
  expect(obj).toEqual({
    a: "foo",
    b: "bar",
  });

  expect(() => {
    obj.a = 1;
  }).toThrow();
});
