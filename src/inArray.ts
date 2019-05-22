const inArray = <T extends any>(value: T, arr: T[]) => arr.indexOf(value) >= 0;

export default inArray;
