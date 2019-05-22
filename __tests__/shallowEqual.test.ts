import shallowEqual from "../src/shallowEqual";

it("should compare two same numbers", () => {
  expect(shallowEqual(1, 1)).toBe(true);
});

it("should compare different same numbers", () => {
  expect(shallowEqual(1, 2)).toBe(false);
});

it("should compare same strings", () => {
  expect(shallowEqual("foo", "foo")).toBe(true);
});

it("should compare different strings", () => {
  expect(shallowEqual("foo", "bar")).toBe(false);
});

it("should compare same arrays", () => {
  expect(shallowEqual([1, 2], [1, 2])).toBe(true);
});

it("should compare same arrays but with different order", () => {
  expect(shallowEqual([1, 2], [2, 1])).toBe(false);
});

it("should compare different arrays", () => {
  expect(shallowEqual([1, 2], [1, 3])).toBe(false);
});

it("should compare different arrays of different size", () => {
  expect(shallowEqual([1, 2], [1])).toBe(false);
});

it("should compare an array with anything else", () => {
  expect(shallowEqual("test", [1, 2])).toBe(false);
});
it("should compare an array with nested objects", () => {
  expect(shallowEqual([{ foo: "bar" }], [{ foo: "bar" }])).toBe(false);
});

it("should compare an array with anything else reverse position", () => {
  expect(shallowEqual([1, 2], "test")).toBe(false);
});

it("should compare an object with same object", () => {
  expect(shallowEqual({ foo: "bar" }, { foo: "bar" })).toBe(true);
});

it("should compare an object with different object", () => {
  expect(shallowEqual({ foo: "bar" }, { foo: "qux" })).toBe(false);
});

it("should compare an object with different nested object", () => {
  expect(shallowEqual({ foo: "bar", a: {} }, { foo: "qux", a: {} })).toBe(false);
});

it("should compare an object with different amount of keys", () => {
  expect(shallowEqual({ foo: "bar", bar: "qux" }, { foo: "qux" })).toBe(false);
});

it("should compare an object with anything else", () => {
  expect(shallowEqual({}, "test")).toBe(false);
});

it("should compare an array with anything else", () => {
  expect(shallowEqual("test", {})).toBe(false);
});

it("should compare an array with an object with same values", () => {
  expect(shallowEqual(["a"], {"0": "a"})).toBe(false);
});

it("should compare null and undefined", () => {
  expect(shallowEqual(null, undefined)).toBe(false);
});

it("should compare null and empty object", () => {
  expect(shallowEqual(null, {})).toBe(false);
});
