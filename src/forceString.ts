import isString from "./isString";
import isObject from "./isObject";
import objectHasKey from "./objectHasKey";

/**
 * Force a value into a string or return a default value
 *
 * @param value
 * @param defaultValue
 * @returns {*}
 */
function forceString(value?: any, defaultValue: string = ""): string {
  if (isString(value)) {
    // $FlowFixMe
    return value;
  }

  // $FlowFixMe
  if (isObject(value) && objectHasKey(value, "toString", true)) {
    // $FlowFixMe
    return value.toString();
  }

  if (typeof value === "undefined" || value === null || Number.isNaN(value)) {
    return defaultValue;
  }

  // $FlowFixMe
  const coerced = value + "";
  if (isString(coerced)) {
    return coerced;
  }

  return defaultValue;
}

export default forceString;
