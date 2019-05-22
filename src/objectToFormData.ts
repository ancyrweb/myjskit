/**
 * Transform an object into a form data
 *
 * @param object
 * @returns {string}
 */
function objectToFormData<T = any>(object: { [key: string]: T }) {
  const data = new FormData();
  Object.keys(object).forEach(key => {
    const value = object[key];
    if (Array.isArray(value)) {
      value.forEach(innerValue => {
        data.append(key + "[]", innerValue);
      });

      return;
    }

    data.append(key, value);
  });

  return data;
}

export default objectToFormData;
