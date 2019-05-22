/**
 * Map every keys of an object using a function.
 * The returned object has the same keys.
 *
 * @param object
 * @param callback
 * @returns {{}}
 */
function mapToArray<T = any, O = any>(
  object: { [key: string]: T },
  callback: (value: T, key: string) => O
): O[] {
  return Object.keys(object).map(key => callback(object[key], key));
}

export default mapToArray;
