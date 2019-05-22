/**
 * Keep only the specified keys from the object
 * @param listOfKeys
 * @param obj
 * @returns {{}}
 */
function keepItemsMatchingKeys<T = any>(
  listOfKeys: Array<string>,
  obj: { [key: string]: T }
): { [key: string]: T } {
  let nextObj = {};
  listOfKeys.forEach(function(key) {
    if (obj[key] !== undefined) {
      nextObj[key] = obj[key];
    }
  });

  return nextObj;
}

export default keepItemsMatchingKeys;
