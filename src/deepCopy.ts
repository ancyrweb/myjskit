/**
 * Copies an Array
 * @param array
 * @returns {Array}
 */
function copyArray(array: any) {
  return array.map(deepCopy);
}

/**
 * Copies an object
 * @param obj
 * @returns {{}}
 */
function copyObject(obj: Object) {
  const copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key) === true) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}

/**
 * Copy array & objects recursively and fast
 * Aimed at being minimal
 * https://jsperf.com/functionnal-vs-json-parse-to-deep-copy
 *
 * @param obj
 * @returns mixed
 */
function deepCopy<T>(
  obj: { [key: string]: T } | T[]
): { [key: string]: T } | T[] {
  if (Array.isArray(obj)) {
    return copyArray(obj);
  } else if (typeof obj === "object" && obj !== null) {
    return copyObject(obj);
  } else {
    return obj;
  }
}

export default deepCopy;
