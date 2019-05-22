import isNumber from "./isNumber";

/**
 * Force a value into a number or return a default value
 *
 * @param value
 * @param defaultValue
 * @returns {*}
 */
function forceNumber(value?: any, defaultValue: number = 0): number {
  if (isNumber(value)) {
    // $FlowFixMe
    return value;
  }

  if (typeof value === "string") {
    if (value.indexOf(".") >= 0) {
      return parseFloat(value);
    }

    return parseInt(value);
  }

  // $FlowFixMe
  const coerced = value + 0;
  if (isNumber(coerced)) {
    return coerced;
  }

  return defaultValue;
}

export default forceNumber;
