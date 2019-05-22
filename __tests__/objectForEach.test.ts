import objectForEach from '../src/objectForEach';

it('should call all the items of the function', () => {
  const obj = { a: 10, b: 12 };
  const fn = jest.fn();

  objectForEach(obj, fn);

  expect(fn.mock.calls.length).toBe(2);
  expect(fn.mock.calls[0]).toEqual([10, "a"]);
  expect(fn.mock.calls[1]).toEqual([12, "b"]);
});

