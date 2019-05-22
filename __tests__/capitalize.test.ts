import capitalize from '../src/capitalize';

it('should capitalize the string', () => {
  expect(capitalize('salut!')).toBe("Salut!");
});
