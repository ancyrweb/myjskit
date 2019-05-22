import Duration from '../src/Duration';

describe('creating', () => {
  it('should return 0h 0m 37s', () => {
    const duration = new Duration(37)
    expect(duration.hours).toBe(0);
    expect(duration.minutes).toBe(0);
    expect(duration.seconds).toBe(37);
  });

  it('should return 0h 1m 37s', () => {
    const duration = new Duration(97);
    expect(duration.hours).toBe(0);
    expect(duration.minutes).toBe(1);
    expect(duration.seconds).toBe(37);
  });

  it('should return 1h 1m 37s', () => {
    const duration = new Duration(3697);
    expect(duration.hours).toBe(1);
    expect(duration.minutes).toBe(1);
    expect(duration.seconds).toBe(37);
  });
});

describe('formating', () => {
  it('should return 01:42', () => {
    expect((new Duration(102)).format('%M:%s')).toBe("01:42");
  });

  it('should return 1:01:42', () => {
    expect((new Duration(3702)).format('%h:%M:%s')).toBe("1:01:42");
  });
});
