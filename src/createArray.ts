export default (count: number): null[] => {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(null);
  }

  return arr;
};
