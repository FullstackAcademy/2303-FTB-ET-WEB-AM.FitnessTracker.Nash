/*

DO NOT CHANGE THIS FILE

*/
require("dotenv").config();
const request = require("supertest");
require("../../db/client");
const app = require("../../app");

describe("/api/health", () => {
<<<<<<< HEAD
  it("responds to a request at /api/health with a message specifying it is healthy", async (done) => {
=======
  xit("responds to a request at /api/health with a message specifying it is healthy", async (done) => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
    const response = await request(app).get("/api/health");
    expect(response.status).toEqual(200);
    expect(typeof response.body.message).toEqual("string");
    done();
  });
});
