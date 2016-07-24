'use strict';

const request = require("request");

const base_url = "http://localhost:8888/records/gender"

describe("API Server", function() {
  describe("GET /records/gender", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns a response body", function(done) {
      const expected = '[{"lastname":"Bayer","firstname":"Lionel","gender":"female","color":"plum","birthdate":"1/26/1934"},{"lastname":"Connell","firstname":"Jude","gender":"female","color":"white","birthdate":"10/19/2000"},{"lastname":"Stokes","firstname":"Kyle","gender":"female","color":"gold","birthdate":"8/2/1988"},{"lastname":"Swaniawski","firstname":"Tressie","gender":"female","color":"pink","birthdate":"3/2/1987"},{"lastname":"White","firstname":"Lilla","gender":"female","color":"magenta","birthdate":"11/8/1980"},{"lastname":"Bednar","firstname":"Blake","gender":"male","color":"maroon","birthdate":"1/23/1910"},{"lastname":"Farrell","firstname":"Helene","gender":"male","color":"teal","birthdate":"1/14/1944"},{"lastname":"Flatley","firstname":"Narciso","gender":"male","color":"salmon","birthdate":"4/2/1966"},{"lastname":"Ledner","firstname":"Evert","gender":"male","color":"purple","birthdate":"9/23/1915"},{"lastname":"McGlynn","firstname":"Teresa","gender":"male","color":"maroon","birthdate":"12/4/1977"},{"lastname":"Tillman","firstname":"Dave","gender":"male","color":"magenta","birthdate":"8/31/1974"},{"lastname":"Tillotson","firstname":"Travis","gender":"male","color":"blue","birthdate":"10/1/1984"}]';

      request.get(base_url, function(error, response, body) {
        expect(body).toBe(expected);
        done();
      });
    });
  });
});
