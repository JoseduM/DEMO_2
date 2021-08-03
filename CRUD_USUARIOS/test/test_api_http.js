const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000';

describe('Testeando endpoint principal: ', () => {
  it('Nos debería devolver un ok ', (done) => {
    chai.request(url)
      .get('/usuarios')
      .end(function (err, res) {
        expect(res.body).to.be.an('array');
        expect(res).to.have.status(200);
        done()
      })
  });

  it('Check de nuestro login: ', function (done) {
    chai.request(url)
      .post('/login')
      .send({
        usuario: "proof1                                ",
        password: "12345254                                "
      })
      .end(function (err, res) {
        console.log(res.body)
        expect(res.body).to.have.property('token');
        expect(res).to.have.status(200);
        done();
      })
  })
})