module.exports = (function(a) {
  return function(url) {
    a.href = url;

    return {
      protocol: a.protocol,
      hostname: a.hostname,
      host: a.host,
      path: a.pathname,
      pathname: a.pathname,
      port: a.port || '80'
    };
  };
})(document.createElement('a'));
