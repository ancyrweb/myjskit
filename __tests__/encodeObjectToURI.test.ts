import encodeObjectToURI from '../src/encodeObjectToURI';

it('should encode the object', () => {
  expect(encodeObjectToURI({ a: "foo", b: "bar" })).toBe("a=foo&b=bar");
});
