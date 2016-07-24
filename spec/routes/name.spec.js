'use strict';

const request = require("request");

const base_url = "http://localhost:8888/records/name"

describe("API Server", function() {
  describe("GET /records/name", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns a response body", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.body).toBe("hello from name");
        done();
      });
    });
  });
});
