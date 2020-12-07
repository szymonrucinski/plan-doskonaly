import { MovieLock } from "./MovieLock";
const sortByWasTested = (a: MovieLock, b: MovieLock): number => {
  if (a.wasTested < b.wasTested) {
    return -1;
  }
  if (a.wasTested > b.wasTested) {
    return 1;
  }
  return 0;
};

export default sortByWasTested;
