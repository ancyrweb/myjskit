/**
 * Find a value in the object and returns it
 * @param obj
 * @param callback
 * @returns {*}
 */
function objectFind<T = any>(
  obj: { [key: string]: T },
  callback: (value: T, key?: string) => boolean
): T | undefined {
  let value, key;
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    // $FlowFixMe
    if (callback(obj[key], key)) {
      value = obj[key];
      break;
    }
  }

  return value;
}

export default objectFind;
