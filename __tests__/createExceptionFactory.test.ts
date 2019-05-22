import createExceptionFactory from '../src/createExceptionFactory';

it('should create an exception', () => {
  const Exception = createExceptionFactory("Exception");
  const instance = new Exception("An error occured");
  let stack : any = (new Error()).stack;

  stack = stack.split('\n');
  stack[1] = "    at Object.<anonymous> (" + __filename + ":9:18)";
  stack = stack.join('\n');

  expect(instance instanceof Error).toBe(true);
  expect(instance.name).toBe("Exception");
  expect(instance.message).toBe("An error occured");
  // expect(instance.stack).toEqual(stack);
});

