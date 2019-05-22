import objectHasKey from '../src/objectHasKey';

it('should check the object has key', () => {
  expect(objectHasKey({ a: "foo" }, "a")).toBe(true);
  expect(objectHasKey({ a: "foo" }, "b")).toBe(false);
});

it('should handle deep check', () => {
  function Test(){ this.b = "bar" }
  Test.prototype.a = "foo";

  const test = new Test();
  expect(objectHasKey(test, "b")).toBe(true);
  expect(objectHasKey(test, "a")).toBe(false);
  expect(objectHasKey(test, "a", true)).toBe(true);
});
