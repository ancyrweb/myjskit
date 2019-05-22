import isArray from "./isArray";
import isObject from "./isObject";

/**
 * Return true if the arrays are shallow equals
 * @param a
 * @param b
 * @returns {boolean}
 */
function arrayShallowEqual(a: any[], b: any[]) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function objectShallowEqual(a: Object, b: Object) {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) return false;

  for (let i = 0; i < aKeys.length; i++) {
    if (a[aKeys[i]] !== b[bKeys[i]]) return false;
  }

  return true;
}

function shallowEqual(a: any, b: any) {
  const aIsArray = isArray(a);
  const bIsArray = isArray(b);

  if (aIsArray === true && bIsArray === false) return false;

  if (aIsArray === false && bIsArray === true) return false;

  if (aIsArray === true && bIsArray === true) return arrayShallowEqual(a, b);

  const aIsObject = isObject(a);
  const bIsObject = isObject(b);

  if (aIsObject === true && bIsObject === false) return false;

  if (aIsObject === false && bIsObject === true) return false;

  if (aIsObject === true && bIsObject === true) return objectShallowEqual(a, b);

  return a === b;
}

export default shallowEqual;
