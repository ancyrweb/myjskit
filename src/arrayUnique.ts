/**
 * Return true if the value is unique in the array
 * @param value
 * @param index
 * @param array
 * @returns {boolean}
 */
function isUniqueInArray<T>(value: T, index: number, array: T[]) {
  return array.indexOf(value) === index;
}

/**
 * Filter the array by unique entities
 * @param array
 */
function arrayUnique<T>(array: T[]) {
  return array.filter(isUniqueInArray);
}

export default arrayUnique;
