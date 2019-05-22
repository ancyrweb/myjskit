import deepGet from "../src/deepGet";

it("should get the value deeply", () => {
  const obj = { a: { b: { c: "foo" }}};
  expect(deepGet(obj, "a.b.c")).toEqual("foo");
});
