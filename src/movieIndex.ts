interface Dictionary<T> {
  [Key: string]: T;
}

export const movieIndex: Dictionary<String> = {
  "300": "300",
  "12-angry-men": "12 Angry Men",
};
