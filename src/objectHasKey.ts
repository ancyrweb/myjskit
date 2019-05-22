/**
 * Check if a key is contained in the object
 *
 * @param value
 * @param key
 * @param checkPrototypeChain
 * @returns boolean
 */
function objectHasKey<T = any>(
  value: { [key: string]: T },
  key: string,
  checkPrototypeChain: boolean = false
): boolean {
  if (checkPrototypeChain === true) {
    return key in value;
  }

  return value.hasOwnProperty(key) === true;
}

export default objectHasKey;
