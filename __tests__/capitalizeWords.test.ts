import capitalizeWords from '../src/capitalizeWords';

it('should capitalize the words', () => {
  expect(capitalizeWords("jean dupont")).toBe("Jean Dupont");
});
it('should capitalize the unique word', () => {
  expect(capitalizeWords("jean")).toBe("Jean");
});
