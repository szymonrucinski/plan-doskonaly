import { observable } from "mobx";

interface Dictionary<T> {
  [Key: string]: T;
}

export const SHOT_TYPES: Dictionary<string> = {
  EXTREMELONGSHOT: "extremeLongShot",
  LONGSHOT: "longShot",
  FULLSHOT: "fullShot",
  MEDIUMSHOT: "mediumShot",
  CLOSEUP: "closeUp",
  MACRODETAIL: "macroDetail",
};

export class MovieFrame {
  movieName: string;
  frameUrl: string;
  frameId: string;
  movieTitle: string;

  @observable
  shotType: string = "NotDefined";

  constructor(movieName: string, frameUrl: string, frameId: string) {
    this.movieName = movieName;
    this.frameUrl = frameUrl;
    this.frameId = frameId;
    this.movieTitle = convertMovieNameToTitle(movieName);
  }

  getFrameUrl() {
    return this.frameUrl;
  }
  setShotType(shotType: string) {
    this.shotType = shotType;
  }
}

export const convertMovieNameToTitle = (movieName: string) =>{
  return movieName.split("-").join(" ");


}