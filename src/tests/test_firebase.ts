import { expect } from "chai";
import { isBeingReviewed, DELETE_ALL_COLLECTIONS, getAllTtitles } from "../Logic/API";

const config = {
  apiKey: "AIzaSyCN_bf8UfnUuuY5u0id2Vx0vFuTCiCXMD0",
  authDomain: "image-classifier-bfcf5.firebaseapp.com",
  databaseURL: "https://image-classifier-bfcf5.firebaseio.com",
  projectId: "image-classifier-bfcf5",
  storageBucket: "image-classifier-bfcf5.appspot.com",
  messagingSenderId: "905120757353",
  appId: "1:905120757353:web:ccee55b2f2c99c343314f8",
  measurementId: "G-8BE6Q5B42D",
};

describe("Test API", () => {
  it("should return list of all movies from DB", async () => {
    const allTitles: string [] = await getAllTtitles();
    console.log(allTitles)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(allTitles).to.not.be.empty;
  });
});


describe("Test DB CleanUp", () => {
  it("should Delete All collections DO NOT USE IT!!!!!", async () => {
    let allTitles = await getAllTtitles();
    DELETE_ALL_COLLECTIONS(allTitles);
    console.log(allTitles)
    allTitles = await getAllTtitles();
    expect(allTitles).to.equal("DeletedToBeDeleted");
  });
});
