'use strict';

const request = require("request");

const base_url = "http://localhost:8888/records"

describe("API Server", function() {
  describe("POST /records", function() {
    it("returns status code 200", function(done) {
      request.post(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns an error message if not provided the correct data structure", function(done) {
      request.post(base_url, function(error, response, body) {
        expect(response.body).toBe("Invalid object");
        done();
      });
    });

    it("returns success when given a valid data structure", function(done) {
      const options = {
        method: 'post',
        body: {lastname:"Foobar",firstname:"Lionel",gender:"female",color:"plum",birthdate:"1/26/1934"},
        json: true,
        url: base_url
      }
      request(options, function(error, response, body) {
        expect(response.body).toBe("success");
        done();
      });
    });
  });
});
