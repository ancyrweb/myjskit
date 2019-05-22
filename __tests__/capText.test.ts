import capText from '../src/capText';

it('should cap text', () => {
  expect(capText("jean dupont", 3)).toBe("jea");
});

it('should cap the text and add a suffix', () => {
  expect(capText("jean dupont", 3, "...")).toBe("jea...");
});

it('should not cap text', () => {
  expect(capText("jean dupont", 30)).toBe("jean dupont");
});
