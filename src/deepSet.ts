type Options = {
  // Creates nested objects to fulfill the deepSet if necessary
  createObjectIfNeeded?: boolean;
};

/**
 * Sets a value deep in the object
 * @param object
 * @param path
 * @param value
 * @param options
 */
function deepSet(object: Object, path: string, value: any, options?: Options) {
  const keys = path.split(".");
  let cursor = object,
    lastKey = null;
  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      lastKey = keys[i];
    } else {
      if (!cursor[keys[i]] && options && options.createObjectIfNeeded === true)
        cursor[keys[i]] = {};

      cursor = cursor[keys[i]];
    }
  }

  cursor[lastKey] = value;
}

export default deepSet;
