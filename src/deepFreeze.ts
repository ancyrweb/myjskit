/**
 * Freeze the object so its properties are immutable
 * @param object
 */
function deepFreeze(object: object): void {
  Object.freeze(object);
  Object.getOwnPropertyNames(object).forEach(function(prop) {
    if (
      object.hasOwnProperty(prop) &&
      object[prop] !== null &&
      (typeof object[prop] === "object" ||
        typeof object[prop] === "function") &&
      !Object.isFrozen(object[prop])
    ) {
      deepFreeze(object[prop]);
    }
  });
}

export default deepFreeze;
