/**
 * Return true if the item is a fixed number
 * @param item
 * @returns {boolean}
 */
function isFixedNumber(item: any): item is number {
  return Number.isSafeInteger(item) === true && item % 1 === 0;
}

export default isFixedNumber;
