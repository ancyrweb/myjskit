/**
 * Apply the schema to the object so the output holds only data common between
 * the schema and the object
 *
 * @param schema
 * @param obj
 * @returns {{}}
 */
function applySchema(schema: object, obj: object): Object {
  const result = { ...schema };
  const schemaKeys = Object.keys(schema);

  for (let property in obj) {
    if (obj.hasOwnProperty(property) && schemaKeys.indexOf(property) >= 0) {
      result[property] = obj[property];
    }
  }

  return result;
}

export default applySchema;
