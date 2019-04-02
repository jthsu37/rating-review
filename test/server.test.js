const request = require('supertest');
// const express = require('express');
// const app = express();
const app = require('../server/index.js');

describe('GET /reviews', () => {
  it('responds to GET reviews', (done) => {
    request(app)
    .get('/reviews')
    .expect(200, done)
  })
})