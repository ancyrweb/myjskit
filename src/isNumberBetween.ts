/**
 * Return true if the value is between the min & max
 *
 * @param value
 * @param min
 * @param max
 * @returns {boolean}
 */
function isNumberBetween(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

export default isNumberBetween;
