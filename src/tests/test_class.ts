import { expect } from "chai";
import {convertMovieNameToTitle} from "../Logic/MovieFrame"

describe("Test mechanics", () => {
  it("should remove all - from movieName and convert it to title", async () => {
    const word = convertMovieNameToTitle('12-angry-men');
    const word1 = convertMovieNameToTitle('300');

    expect(word).to.equal("12 angry men");
    expect(word1).to.equal("300");

  });
});
