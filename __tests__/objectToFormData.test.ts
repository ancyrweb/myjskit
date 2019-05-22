import objectToFormData from '../src/objectToFormData';

function defineGlobalProperty(name, value) {
  Object.defineProperty(global, name, {
    configurable: true,
    value: value(),
  });
}

defineGlobalProperty('FormData', () => require('../__mocks__/FormData'));

it('should check the object has key', () => {
  expect(objectToFormData({ foo: "bar"})).toEqual({
    "_parts": [
      ["foo", "bar"]
    ]
  })
});
