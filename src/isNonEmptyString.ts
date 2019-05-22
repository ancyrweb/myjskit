import isString from "./isString";

const isNonEmptyString = (x: any) => isString(x) && x.length > 0;
export default isNonEmptyString;
