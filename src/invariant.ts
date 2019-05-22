let NODE_ENV = process.env.NODE_ENV;

/**
 * Used to assert state the program assumes to be true.
 *
 * invariant(
 *    Number.isNumber(supposedNumber),
 *    "Expected a number, %s given",
 *    supposedNumber
 *  );
 *
 * @param condition
 * @param format
 * @param args
 */
function invariant(condition: boolean, format: string, ...args: Array<string>) {
  if (NODE_ENV !== "production") {
    if (format === undefined) {
      throw new Error("invariant requires an error message argument");
    }
  }

  if (condition === false) {
    let error;
    if (format === undefined) {
      error = new Error(
        "Minified exception occurred; use the non-minified dev environment " +
          "for the full error message and additional helpful warnings."
      );
    } else {
      let argIndex = 0;

      error = new Error(format.replace(/%s/g, () => args[argIndex++]));
      error.name = "Invariant Violation";
    }

    throw error;
  }
}

export default invariant;
