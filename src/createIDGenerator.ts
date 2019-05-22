export type GeneratorType = () => number;

/**
 * Return a function that generate IDs
 * @returns {Function}
 */
function createIDGenerator(): GeneratorType {
  let id: number = 1;
  return function(): number {
    return id++;
  };
}

export default createIDGenerator;
