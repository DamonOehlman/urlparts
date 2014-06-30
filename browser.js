module.exports = (function(a) {
  var decode = decodeURIComponent;

  function parseQueryString(input) {
    var parts = input.split('&');
    var output = {};

    parts.forEach(function(pair) {
      var nv = pair.split('=');
      output[decode(nv[0])] = decode(nv[1] || '');
    });

    return output;
  }

  return function(url, qs) {
    var output;

    // inject the url into the tag
    a.href = url;

    // generate the output
    output = {
      protocol: a.protocol,
      hostname: a.hostname,
      host: a.host,
      path: a.pathname + (a.search || ''),
      pathname: a.pathname,
      port: a.port || '80'
    };

    // add the query string if it should be parsed
    if (qs) {
      output.query = parseQueryString(a.search.slice(1));
    }

    return output;
  };
})(document.createElement('a'));
