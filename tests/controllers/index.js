var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Home-map Controller (Version 1)', function() {
  it('should beable to get map on /map-get GET');
  it('should be connect to internet /ping GET');
  it('should be able to get yelp api /yelp-ping GET');
});
