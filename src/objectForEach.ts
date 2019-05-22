/**
 * loop over the object's properties
 * @param object
 * @param callback
 */
function objectForEach<T = any>(
  object: { [key: string]: T },
  callback: (value: T, key?: string) => void
): void {
  // $FlowFixMe
  Object.keys(object).forEach(key => callback(object[key], key));
}

export default objectForEach;
