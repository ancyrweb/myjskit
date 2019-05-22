import twoDigits from '../src/twoDigits';

it('should transform the number in a two digit format', () => {
  expect(twoDigits(8)).toEqual("08");
});
