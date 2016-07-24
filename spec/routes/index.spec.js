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

    it("returns a response body", function(done) {
      request.post(base_url, function(error, response, body) {
        expect(response.body).toBe("hello from index");
        done();
      });
    });
  });
});
