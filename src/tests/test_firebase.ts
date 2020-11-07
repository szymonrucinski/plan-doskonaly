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

// describe("Test API", () => {
//   it("should return list of all movies from DB", async () => {
//     isBeingReviewed();
//     expect("HelloWorld").to.equal("Hello World!");
//   });
// });


describe("Test API", () => {
  it("should Delete All elements inside collection", async () => {
    const allTitles = await getAllTtitles();
    DELETE_ALL_COLLECTIONS(allTitles);
    console.log(allTitles)
    expect("DeltedToBeDeleted").to.equal("DeletedToBeDeleted");
  });
});
