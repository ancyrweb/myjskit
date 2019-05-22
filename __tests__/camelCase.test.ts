import camelCase from "../src/camelCase";

it('should camelCase', () => {
  expect(camelCase("this is some shit")).toBe("thisIsSomeShit");
});

it('should accept a separator argument', () => {
  expect(camelCase("this.is.dope", ".")).toBe("thisIsDope");
})
