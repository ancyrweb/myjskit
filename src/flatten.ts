const flatten = (values: any) => {
  if (Array.isArray(values) === false)
    return values;

  let out = [];
  for (let val of values) {
    let flattened = flatten(val);
    if (Array.isArray(flattened)) {
      out = [
        ...out,
        ...flattened
      ];
    } else {
      out.push(flattened);
    }
  }

  return out;
};

export default flatten;
