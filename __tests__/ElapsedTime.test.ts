import ElapsedTime from '../src/ElapsedTime';

it('should return 3 days 2 hours 7 minutes and 50 seconds', () => {
  expect(ElapsedTime.create(266870)).toEqual({
    days: 3,
    hours: 2,
    minutes: 7,
    seconds: 50,
  });
});

it('should return 0 for any negative number', () => {
  expect(ElapsedTime.create(-300)).toEqual({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
});
