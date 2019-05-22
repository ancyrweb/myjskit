import isFunction from '../src/isFunction';

it('should assert its a function', () => {
  const fn = function(){};
  expect(isFunction(fn)).toBe(true);
});
