var test = require('tape');
var expect = require('./helpers/expect');

test('http://test.com/this/is/a/test-url', expect({
  protocol: 'http:',
  host: 'test.com',
  path: '/this/is/a/test-url'
}));

test('http://test.com/this/is/a/test-url', expect({
  protocol: 'http:',
  host: 'test.com',
  pathname: '/this/is/a/test-url'
}));
