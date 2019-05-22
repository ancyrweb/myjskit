import isEmail from '../src/isEmail';

it('should return true', () => {
  expect(isEmail("johndoe@gmail.com")).toBe(true);
});

it('should return false', () => {
  expect(isEmail("foo")).toBe(false);
});
