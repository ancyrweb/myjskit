import capitalize from "./capitalize";

function camelCase(val: string, separator: string = " "): string {
  return val
    .split(separator)
    .map((v, i) => (i > 0 ? capitalize(v) : v))
    .join("");
}

export default camelCase;
