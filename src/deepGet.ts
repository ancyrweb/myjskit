/**
 * Return a value deep in the object
 * @param object
 * @param path
 * @returns {Object}
 */
function deepGet(object: Object, path: string) {
  return path.split(".").reduce((obj, nextKey) => obj[nextKey], object);
}

export default deepGet;
