const waitFor = (delay: number) =>
  new Promise(accept => {
    setTimeout(accept, delay);
  });

export default waitFor;
