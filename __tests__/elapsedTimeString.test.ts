import elapsedTimeString from '../src/elapsedTimeString';
import timestamp from '../src/timestamp';

describe("to minified format", () => {
  it('should return 26/06', () => {
    expect(elapsedTimeString(15265514, "minified")).toEqual("26/06");
  });

  it('should return 3j', () => {
    expect(elapsedTimeString(timestamp() - 259200, "minified")).toEqual("3j");
  });

  it('should return 10h', () => {
    expect(elapsedTimeString(timestamp() - 36000, "minified")).toEqual("10h");
  });

  it('should return 30mn', () => {
    expect(elapsedTimeString(timestamp() - 1800, "minified")).toEqual("30mn");
  });

  it('should return 30s', () => {
    expect(elapsedTimeString(timestamp() - 30, "minified")).toEqual("30s");
  })
});

describe("to normal format", () => {
  it('should return 26/06', () => {
    expect(elapsedTimeString(15265514, "normal")).toEqual("le 26/06");
  });

  it('should return 3j', () => {
    expect(elapsedTimeString(timestamp() - 259200, "normal")).toEqual("Il y a 3j");
  });

  it('should return 10h', () => {
    expect(elapsedTimeString(timestamp() - 36000, "normal")).toEqual("Il y a 10h");
  });

  it('should return 30mn', () => {
    expect(elapsedTimeString(timestamp() - 1800, "normal")).toEqual("Il y a 30mn");
  });

  it('should return 30s', () => {
    expect(elapsedTimeString(timestamp() - 30, "normal")).toEqual("Il y a 30s");
  })
});
