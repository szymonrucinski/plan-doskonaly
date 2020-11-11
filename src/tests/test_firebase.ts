import { expect } from "chai";
import { DELETE_ALL_COLLECTIONS, getAllTtitles } from "../Logic/API";

describe("Test API", () => {
  it("should return list of all movies from DB", async () => {
    const allTitles: string[] = await getAllTtitles();
    console.log(allTitles);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(allTitles).to.not.be.empty;
  });
});

describe("Test DB CleanUp", () => {
  it("should Delete All collections DO NOT USE IT!!!!!", async () => {
    let allTitles = await getAllTtitles();
    DELETE_ALL_COLLECTIONS(allTitles);
    console.log(allTitles);
    allTitles = await getAllTtitles();
    expect(allTitles).to.equal("DeletedToBeDeleted");
  });
});
