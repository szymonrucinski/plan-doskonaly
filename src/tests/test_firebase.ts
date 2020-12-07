import { expect } from "chai";
import chai from "chai"
import chaiHttp from "chai-http";

import {multiply, array, fetchFromApi} from "../sampleFunctions"

describe("Function", () => {
  it("Should return result of multiplication", async () => {
    var value : number = multiply(15,15)
    expect(value).to.be.equal(225);
  });
  it("Should return numers as an array", async () => {
    var value : number[] = array(15,15)
    expect(value).to.eql([15,15]);
  });
});

chai.use(chaiHttp)

describe("Test basic interaction", () => {
  it("Get initial message", (done) => {
    chai
      .request('https://jsonplaceholder.typicode.com')
      .get("/todos/1")
      .end((err, response) => {
        console.log(response)
        response.should.have.status(200);
        response.text.should.be.a("string");
        expect(response).to.be.a('object')
        done();
      });
  });
});