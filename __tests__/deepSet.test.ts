import deepSet from "../src/deepSet";

it("should set the value deeply", () => {
  const obj = { a: { b: { c: "foo" }}};
  deepSet(obj, "a.b.c", "bar");
  expect(obj).toEqual({ a: { b: { c: "bar" }}});
});

it("should set the value deeply and create data if needed", () => {
  const obj = { a: {} };
  deepSet(obj, "a.b.c", "bar", { createObjectIfNeeded: true });
  expect(obj).toEqual({ a: { b: { c: "bar" }}});
});
