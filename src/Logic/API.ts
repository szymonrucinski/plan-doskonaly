import firebase from "firebase";
import { MovieFrame } from "./MovieFrame";
import { SHOT_TYPES } from "./MovieFrame";
export const config = {
  apiKey: "AIzaSyCN_bf8UfnUuuY5u0id2Vx0vFuTCiCXMD0",
  authDomain: "image-classifier-bfcf5.firebaseapp.com",
  databaseURL: "https://image-classifier-bfcf5.firebaseio.com",
  projectId: "image-classifier-bfcf5",
  storageBucket: "image-classifier-bfcf5.appspot.com",
  messagingSenderId: "905120757353",
  appId: "1:905120757353:web:ccee55b2f2c99c343314f8",
  measurementId: "G-8BE6Q5B42D",
};

export const getData = async (collectionName: string) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  const db = firebase.firestore();
  const collectionRef = db.collection(collectionName);
  const snapshot = await collectionRef.get();
  const arr: MovieFrame[] = [];
  snapshot.forEach((doc) => {
    const link = doc.data();
    arr.push(new MovieFrame(collectionName, link.frame_url, doc.id));
  });
  return arr;
};

const stringToNumberField = (shotType: String) => {
  const increment = firebase.firestore.FieldValue.increment(1);

  for (const key in SHOT_TYPES) {
    const value: string = SHOT_TYPES[key];
    console.log(value);
    if (shotType === value) {
      return { value: increment };
    }
  }
};

export const setData = async (movieFrames: MovieFrame[]) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  const collectionName: string = movieFrames[0].movieName;
  const db = firebase.firestore();
  const collectionRef = db.collection(collectionName);
  movieFrames.forEach((movie) => {
    collectionRef
      .doc(movie.frameId)
      .update(stringToNumberField(movie.shotType)!);
  });
};
