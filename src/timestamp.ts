/**
 * TODO : test
 * Return the timestamp in seconds
 * @returns {number}
 */
function timestamp(): number {
  return Math.trunc(new Date().getTime() / 1000);
}

export default timestamp;
