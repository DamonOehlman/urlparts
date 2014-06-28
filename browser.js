module.exports = (function(a) {
  return function(url) {
    a.href = url;

    return {
      protocol: a.protocol,
      host: a.host,
      path: a.pathname,
      pathname: a.pathname
    };
  };
})(document.createElement('a'));
