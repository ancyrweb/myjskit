import generateID from '../src/id';

it('should generate unique IDs', () => {
  let id = generateID();
  let lastGeneratedID = generateID.getLastGeneratedID();

  expect(id).not.toEqual(generateID());
  expect(id).toEqual(lastGeneratedID);
  expect(id).not.toEqual(generateID.getLastGeneratedID());
});
