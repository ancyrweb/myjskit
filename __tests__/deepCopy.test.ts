import deepCopy from "../src/deepCopy";

it('should make a deep copy', () => {
  const objA = { a: { b: "foo" }};
  const objB : any = deepCopy(objA);

  expect(objB).toEqual({ a: { b: "foo" }});
  expect(objB.a).not.toBe(objA.a);
});

it('should make a deep copy of null', () => {
  const objA = { a: { b: null }};
  const objB = deepCopy(objA);

  expect(objB).toEqual({ a: { b: null }});
});

it('should make a deep copy of an array', () => {
  const objA : any = [1, 2, { a: {b: "foo" }}];
  const objB : any = deepCopy(objA);

  expect(objB).toEqual([1, 2, { a: {b: "foo" }}]);
  expect(objB[2].a).not.toBe(objA[2].a);
});

it('should make a deep copy of the array', () => {
  const objA = { a: [1, 2]};
  const objB : any = deepCopy(objA);

  expect(objB).toEqual({ a: [1, 2]});
  expect(objA.a).not.toBe(objB.a);
});
