const timestamp = require("./timestamp");

/**
 * TODO : test this
 * Return the timestamp in seconds
 * @returns {number}
 */
function delay(time: number): number {
  return timestamp() - time;
}

export default delay;
