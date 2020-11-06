import { observable } from "mobx";

interface Dictionary<T> {
  [Key: string]: T;
}

export const SHOT_TYPES: Dictionary<string> = {
  WIDESHOT: "wideShot",
  EXTREMEWIDESHOT: "extremeWideShot",
  MEDIUMSHOT: "mediumShot",
  MEDIUMLONGSHOT: "mediumLongShot",
  CLOSEUP: "closeUp",
  EXTREMECLOSEUP: "extremeCloseUp",
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
    return this.frameUrl;
  }
  setShotType(shotType: string) {
    this.shotType = shotType;
  }
}
