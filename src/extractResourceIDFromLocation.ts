/**
 * Extract a resource ID from a REST Url.
 *
 * @example
 * For the url https://website.com/posts/1, it will return 1
 */
function extractResourceIDFromLocation(location: string): number {
  return parseInt(location.split("/").pop(), 10);
}

export default extractResourceIDFromLocation;
