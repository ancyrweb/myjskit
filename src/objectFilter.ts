/**
 * Map every keys of an object using a function.
 * The returned object has the same keys.
 *
 * @param object
 * @param callback
 * @returns {{}}
 */
function filter<T = any>(
  object: { [key: string]: T },
  callback: (value: T, key?: string) => boolean
): { [key: string]: T } {
  let next = {};
  Object.keys(object).forEach(key => {
    const result = callback(object[key], key);
    if (result) {
      next[key] = object[key];
    }
  });

  return next;
}

export default filter;
