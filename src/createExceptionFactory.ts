/**
 * Format the stack to remove unwanted fields
 * @param stack
 * @returns {Array}
 */
function format(stack: string): string {
  let tmp: any = stack.split("\n");
  // Since the error has been generated inside the factory, the first line refers to the factory
  // We don't need this to appear in the stack so we remove it
  tmp.splice(1, 1);
  tmp = tmp.join("\n");
  return tmp;
}

/**
 * creates an exception factory that allows to create Exception extending from Error easily
 * @param name
 * @returns {}
 */
function createExceptionFactory(name: string) {
  const exception = function(message: string = "") {
    this.name = name || "Error";
    this.message = message;
    this.stack = format(new Error().stack);
  };

  exception.prototype = Object.create(Error.prototype);
  exception.prototype.constructor = exception;
  return exception;
}

export default createExceptionFactory;
