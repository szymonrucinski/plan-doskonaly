import { action, observable, onBecomeObserved } from "mobx";
import { MovieFrame } from "./MovieFrame";
import { getImages } from "./getImages";

export class ClassifierController {
  @observable
  movies: MovieFrame[] = [] as MovieFrame[];
  @observable
  count: number = 0;
  forwardButtonDisabled: boolean = false;
  backwardButtonDisabled: boolean = false;

  @action
  incCount(): void {
    this.count += 1;
    console.log(this.count);
    if (this.count >= this.movies?.length - 1) {
      this.forwardButtonDisabled = true;
      console.log(this.forwardButtonDisabled);
    }
    if (this.count === 0) {
      this.backwardButtonDisabled = true;
    } else {
      this.forwardButtonDisabled = false;
    }
  }

  @action
  decCount(): void {
    this.count -= 1;
    console.log(this.count);
    this.backwardButtonDisabled = false;
    if (this.count === 1) {
      this.backwardButtonDisabled = true;
    }
    if (this.count === this.movies?.length - 1) {
      this.backwardButtonDisabled = false;
    }
  }

  @action
  setMovies(moviesResponse: MovieFrame[]): void {
    this.movies = moviesResponse;
    console.log(moviesResponse);
    console.log(this.movies);
  }

  getUnreviewedShots(): void {
    console.log(this.movies?.find((obj) => obj.shotType === "NotDefined"));
  }
  // @computed
  getBackwardDisabled(): boolean {
    console.log("disabled");
    return this.backwardButtonDisabled;
  }
}
