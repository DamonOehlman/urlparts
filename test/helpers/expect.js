var urlparts = require('../../');

module.exports = function(expected) {
  var keys = Object.keys(expected);

  return function(t) {
    var parts;

    t.plan(keys.length);
    parts = urlparts(t.name, true);

    keys.forEach(function(key) {
      t.deepEqual(parts[key], expected[key]);
    });
  };
};
