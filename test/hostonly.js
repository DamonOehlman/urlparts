var test = require('tape');
var expect = require('./helpers/expect');

test('http://www.google.com', expect({
  protocol: 'http:',
  host: 'www.google.com',
  path: '/'
}));

test('http://www.google.com', expect({
  protocol: 'http:',
  host: 'www.google.com',
  pathname: '/'
}));
