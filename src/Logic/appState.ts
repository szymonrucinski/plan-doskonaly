import { observable, action } from "mobx";
import { MovieFrame } from "./MovieFrame";

export const appState = observable({
  count: 0,
  forwardButtonDisabled: false,
  backwardButtonDisabled: false,
  setAllMovies: action((allMovies: MovieFrame[]) => {
    console.log(allMovies);
  }),

  incCount: action((allMovieslength: number) => {
    appState.count += 1;
    console.log(appState.count);
    if (appState.count === allMovieslength - 2) {
      appState.forwardButtonDisabled = true;
    }
    if (appState.count === 0) {
      appState.backwardButtonDisabled = false;
    }
  }),
  decCount: action((allMovieslength: number) => {
    appState.count -= 1;
    console.log(appState.count);
    appState.backwardButtonDisabled = false;
    if (appState.count === 1) {
      appState.backwardButtonDisabled = true;
    }
    if (appState.count === allMovieslength - 1) {
      appState.backwardButtonDisabled = false;
    }
  }),
  //   getForwardButton: computed(() => {
  //     return appState.backwardButtonDisabled;
  //   }),
});
