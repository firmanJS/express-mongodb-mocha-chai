process.env.NODE_ENV = 'test';
const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const server = `http://localhost:${process.env.APP_PORT}`;
const assert = require('chai').assert;

chai.use(chaiHttp);

// Our parent block
describe('Products', () => {
  describe('/GET poduct', () => {
    it('it should GET all the products', (done) => {
      chai.request(server)
          .get('/product')
          .end((err, res) => {
            expect(res.body);
            if (res.body.data.length > 0) {
              expect(res.body.data[0].name);
            }
            done(err);
          });
    });
  });

  describe('/POST product', () => {
    it('it should not POST a product without pages field', (done) => {
      const product = {
        name: 'The Lord of the Rings',
        price: 900,
      };
      assert.typeOf(product.name, 'string');
      assert.typeOf(product.price, 'number');
      chai.request(server).post('/product').send(product)
          .end((err, res) => {
            done(err);
          });
    });
  });

  describe('/GET/:id product', () => {
    it('it should GET one the products', (done) => {
      chai.request(server)
          .get('/product')
          .end((err, res) => {
            if (res.body.data.length > 0) {
              it('it should GET a product by the given id', (done) => {
                chai.request(server).get(`/product/${res.body.data[0]._id}`)
                    .end((err, res) => {
                      expect(res.body.data);
                      done(err);
                    });
              });
            }
            done(err);
          });
    });
  });

  describe('/PUT/:id product', () => {
    it('it should UPDATE a product given the id', (done) => {
      chai.request(server)
          .get('/product')
          .end((err, res) => {
            if (res.body.data.length > 0) {
              it('it should GET a product by the given id', (done) => {
                chai.request(server)
                    .delete(`/product/${res.body.data[0]._id}`)
                    .end((err, res) => {
                      expect(res.body);
                      done(err);
                    });
              });
              done(err);
            }
          });
    });
  });

  describe('/DELETE/:id product', () => {
    it('it should DELETE a product given the id', (done) => {
      chai.request(server)
          .get('/product')
          .end((err, res) => {
            if (res.body.data.length > 0) {
              it('it should GET a product by the given id', (done) => {
                chai.request(server)
                    .delete(`/product/${res.body.data[0]._id}`)
                    .end((err, res) => {
                      expect(res.body);
                      done(err);
                    });
              });
              done(err);
            }
          });
    });
  });
});
