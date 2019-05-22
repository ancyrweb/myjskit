import extractResourceIDFromLocation from '../src/extractResourceIDFromLocation';

it('should extract the resource ID from the URL', () => {
  expect(extractResourceIDFromLocation("https://website.com/posts/1")).toBe(1);
});
