import getGeographicDistance from '../src/getGeographicDistance';

it('Should return the distance between the points', () => {
  expect(getGeographicDistance(47.1234, 7.1234, 47.1234, 7.1234)).toBe(0);
  expect(Math.floor(getGeographicDistance(47.1234, 7.1234, 47.1234, 7.1235))).toBe(7);
  expect(Math.floor(getGeographicDistance(47.1234, 7.1234, 47.1235, 7.1235))).toBe(13);
  expect(Math.floor(getGeographicDistance(47.1233, 7.1233, 47.1235, 7.1235))).toBe(26);
});
