/**
 * Map every keys of an object using a function.
 * The returned object has the same keys.
 *
 * @param object
 * @param callback
 * @returns {{}}
 */
function objectMap<T = any, O = any>(
  object: { [key: string]: T },
  callback: (value: T, key?: string) => O
): { [key: string]: O } {
  let next = {};
  Object.keys(object).forEach(key => (next[key] = callback(object[key], key)));
  return next;
}

export default objectMap;
