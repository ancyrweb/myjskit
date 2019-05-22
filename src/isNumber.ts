function isNumber(value?: any): value is number {
  return !Number.isNaN(parseFloat(value)) && Number.isFinite(value);
}

export default isNumber;
