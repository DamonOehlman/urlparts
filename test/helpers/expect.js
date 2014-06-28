var urlparts = require('../../');

module.exports = function(expected) {
  var keys = Object.keys(expected);

  return function(t) {
    var parts;

    t.plan(keys.length);
    parts = urlparts(t.name);

    keys.forEach(function(key) {
      t.equal(parts[key], expected[key]);
    });
  };
};
