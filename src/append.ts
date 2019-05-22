const append = <T extends any>(value: T, arr: T[]): T[] => [...arr, value];

export default append;
