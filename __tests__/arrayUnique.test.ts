import arrayUnique from "../src/arrayUnique";

it("should filter out duplicates", () => {
  expect(arrayUnique([1, 2, 1, 3, 4, 1, 4, 5, 1])).toEqual([1, 2, 3, 4, 5]);
});
