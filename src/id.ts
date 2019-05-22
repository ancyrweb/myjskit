let lastGeneratedId = null;

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

/**
 * Generate a random ID.
 * Inspired by https://stackoverflow.com/a/105074/5289692
 */
function nonCompliantGUID() {
  lastGeneratedId =
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4();
  return lastGeneratedId;
}

nonCompliantGUID.getLastGeneratedID = function() {
  return lastGeneratedId;
};

export default nonCompliantGUID;
