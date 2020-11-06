import { action, observable, computed } from "mobx";
import { MovieFrame } from "./MovieFrame";

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
    if (this.count === this.movies?.length - 1) {
      this.forwardButtonDisabled = true;
      console.log(this.forwardButtonDisabled);
    } else {
      this.forwardButtonDisabled = false;
    }
  }

  @action
  decCount(): void {
    if (this.count <= 0) {
      this.count = 1;
    }
    this.forwardButtonDisabled = false;
    this.count -= 1;
  }

  @action
  setMovies(moviesResponse: MovieFrame[]): void {
    this.movies = moviesResponse;
  }

  getUnreviewedShots(): MovieFrame[] {
    return this.movies.filter((movie) => movie.shotType === "NotDefined");
  }

  getReviewedShots(): MovieFrame[] {
    return this.movies.filter((movie) => movie.shotType !== "NotDefined");
  }

  @observable
  getBackwardDisabled(): boolean {
    return this.backwardButtonDisabled;
  }

  @observable
  getForwardDisabled(): boolean {
    return this.forwardButtonDisabled;
  }
}
