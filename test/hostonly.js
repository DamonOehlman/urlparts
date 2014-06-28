var test = require('tape');
var expect = require('./helpers/expect');

test('http://www.google.com', expect({
  protocol: 'http:',
  hostname: 'www.google.com',
  path: '/'
}));

test('http://www.google.com', expect({
  protocol: 'http:',
  hostname: 'www.google.com',
  pathname: '/'
}));

test('http://www.google.com:80', expect({
  protocol: 'http:',
  hostname: 'www.google.com',
  port: '80',
  pathname: '/'
}));

test('http://www.google.com:8080', expect({
  protocol: 'http:',
  hostname: 'www.google.com',
  port: '8080',
  pathname: '/'
}));
