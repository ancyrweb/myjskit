export const toRadian = deg => (deg * Math.PI) / 180;

/**
 * Calculates Great-circle distance between two points, in meter.
 * https://en.wikipedia.org/wiki/Great-circle_distance
 * @param latA
 * @param lonA
 * @param latB
 * @param lonB
 */
export default (latA: number, lonA: number, latB: number, lonB: number) => {
  const lat = toRadian(latA),
    lon = toRadian(lonA);
  const bLat = toRadian(latB),
    bLon = toRadian(lonB);
  return (
    6371 *
    1000 *
    Math.acos(
      Math.cos(lat) * Math.cos(bLat) * Math.cos(bLon - lon) +
        Math.sin(lat) * Math.sin(bLat)
    )
  );
};
