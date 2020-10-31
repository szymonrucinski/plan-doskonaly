export enum SHOT_TYPES {
  WIDESHOT = "wideShot",
  MEDIUMSHOT = "mediumShot",
  CLOSEUP = "closeUp",
  LONGSHOT = "longShot",
}

export class MovieFrame {
  movieName: string;
  frameUrl: string;
  frameId: string;
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
  }
}
