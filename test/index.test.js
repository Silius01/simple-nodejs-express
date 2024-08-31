// test/index.test.js
const request = require('supertest');
const app = require('../index');

describe('GET /', function() {
    it('responds with "Hello World"', function(done) {
        request(app)
            .get('/')
            .expect('Hello World')
            .expect(200, done);
    });
});
