/**
 * Return true if the item is an array
 * @param item
 * @returns {boolean}
 */
function isArray<T = any>(item: any): item is Array<T> {
  return Array.isArray(item);
}

export default isArray;
