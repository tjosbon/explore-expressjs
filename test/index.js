'use strict';

const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('GET /', () => {
  let response;
  before((done) => {
    chai.request(app)
      .get('/test')
      .end((err, res) => {
        if(err) console.log(err);
        console.log(response);
        response = res;
        done(err);
      });
  });
  it('should have status code 200', () => {
    response.should.have.status(200);
  });
  it('should have text with message', () => {
    response.text.should.equal('Hello World!');
  });
});
