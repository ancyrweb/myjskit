/**
 * TODO : test
 * Create a date instance from a seconds-formatted timestamp
 * @param timestamp
 * @returns {Date}
 */
function timestampToDate(timestamp: number): Date {
  return new Date(timestamp * 1000);
}

export default timestampToDate;
