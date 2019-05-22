import keepItemsMatchingKeys from '../src/keepItemsMatchingKeys';

it('should keep only the wanted keys', () => {
  const object = { username: "john", age: 18 };
  expect(keepItemsMatchingKeys(["username"], object)).toEqual({ username: "john" });
});
