import isArray from "./isArray";

/**
 * Force a value into an array
 *
 * @param value
 * @returns {*}
 */
function forceArray<T = any>(value?: any): T[] {
  // $FlowFixMe
  return isArray(value) ? value : [];
}

export default forceArray;
