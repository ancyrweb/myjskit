import capitalize from "./capitalize";

/**
 * Capitalize the first letter
 * @param str
 * @returns {string}
 */
function capitalizeWords(str: string): string {
  return str
    .split(" ")
    .map(capitalize)
    .join(" ");
}

export default capitalizeWords;
