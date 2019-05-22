/**
 * Transform an object into an URI-compliant value
 *
 * @example
 * {a: "foo", b: "bar"}
 * =>
 * a=foo&b=bar
 *
 * @param object
 * @returns {string}
 */
function encodeObjectToURI(object: object): string {
  return Object.keys(object)
    .map(key => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]);
    })
    .join("&");
}

export default encodeObjectToURI;
