var test = require('tape');
var expect = require('./helpers/expect');

test('http://test.com/test?username=fred', expect({
  protocol: 'http:',
  host: 'test.com',
  pathname: '/test',
  path: '/test?username=fred',
  query: {
    username: 'fred'
  }
}));

test('http://test.com/test?user%20name=fred%20smith', expect({
  protocol: 'http:',
  host: 'test.com',
  pathname: '/test',
  path: '/test?user%20name=fred%20smith',
  query: {
    'user name': 'fred smith'
  }
}));
