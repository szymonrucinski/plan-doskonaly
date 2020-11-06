export class MovieLock {
  id: string;
  isBeingReviewed: boolean;
  wasTested: number;

  constructor(id: string, isBeingReviewed: boolean, wasTested: number) {
    this.id = id;
    this.isBeingReviewed = isBeingReviewed;
    this.wasTested = wasTested;
  }
}

export const sortByWasTested = (a: MovieLock, b: MovieLock): number => {
  if (a.wasTested < b.wasTested) {
    return -1;
  }
  if (a.wasTested > b.wasTested) {
    return 1;
  }
  return 0;
};
