/**
 * Return true if the item is an object
 * @param item
 * @returns {boolean}
 */
function isObject(item: any): item is object {
  return typeof item === "object" && item !== null;
}

export default isObject;
