import { observable } from "mobx";

interface Dictionary<T> {
  [Key: string]: T;
}

export const SHOT_TYPES: Dictionary<string> = {
  WIDESHOT: "wideShot",
  MEDIUMSHOT: "mediumShot",
  CLOSEUP: "closeUp",
  LONGSHOT: "longShot",
};

export class MovieFrame {
  movieName: string;
  frameUrl: string;
  frameId: string;

  @observable
  shotType: string = "NotDefined";

  constructor(movieName: string, frameUrl: string, frameId: string) {
    this.movieName = movieName;
    this.frameUrl = frameUrl;
    this.frameId = frameId;
  }

  getFrameUrl() {
    console.log(this.frameId);
    return this.frameUrl;
  }
  setShotType(shotType: string) {
    this.shotType = shotType;
    console.log();
  }
}

// decorate(MovieFrame, {
//   setShotType: action,
//   shotType: observable,
// });
