/**
 * Transform the time in a two digit format
 * @param time
 * @returns {string}
 */
function twoDigits(time: number): string {
  return time < 10 ? "0" + time : "" + time;
}

export default twoDigits;
