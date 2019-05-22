const removeFrom = <T extends any>(value: T, arr: T[]): T[] =>
  arr.filter(innerValue => innerValue !== value);

export default removeFrom;
