const afterDelay = (fn: () => any, delay: number) => () =>
  setTimeout(() => {
    fn();
  }, delay);

export default afterDelay;
