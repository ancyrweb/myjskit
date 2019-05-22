/**
 * Return true if it's an empty object
 * See http://stackoverflow.com/a/4994244/5289692
 *
 * @param obj
 * @returns {boolean}
 */
function isEmptyObject(obj: any): boolean {
  if (obj == null) return true;
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;

  if (typeof obj !== "object") return true;

  for (let key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) return false;
  }

  return true;
}

export default isEmptyObject;
