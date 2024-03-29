import { action, observable } from "mobx";
import { MovieFrame } from "./MovieFrame";

export class ClassifierController {
  @observable
  movies: MovieFrame[] = [] as MovieFrame[];
  @observable
  count: number = 0;
  forwardButtonDisabled: boolean = false;
  backwardButtonDisabled: boolean = false;
  particle:number=1;

  @action
  incCount(): void {
    this.count += 1;
    if (this.count === this.movies?.length - 1) {
      this.forwardButtonDisabled = true;
    } else {
      this.forwardButtonDisabled = false;
    }
    if(this.getReviewedShots().length === this.count-1)
    {
      this.count = this.getReviewedShots().length
    }
    this.particle+=10;
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

  @observable
  getParticle(): number{
    console.log(this.particle)
    return this.particle;
  }
}
