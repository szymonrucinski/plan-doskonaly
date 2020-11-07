import firebase from "firebase";
import { string } from "mobx-state-tree/dist/internal";
import { MovieFrame, SHOT_TYPES } from "./MovieFrame";
import { MovieLock } from "../Logic/MovieLock";
import sortByWasTested from "./sortByWasTested";

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
const listOfAllMovies: string = "0A_LIST_OF_MOVIES";

export const getData = async () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  const collectionName: string = await isBeingReviewed();
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

export const isBeingReviewed = async () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  const db = firebase.firestore();
  const collectionRef = db.collection(listOfAllMovies);
  const snapshot = await collectionRef.get();
  const arr: MovieLock[] = [] as MovieLock[];
  snapshot.forEach((doc) => {
    const data = doc.data();
    if (data.isBeingReviewed === false) {
      arr.push(new MovieLock(doc.id, data.isBeingReviewed, data.was_tested));
    }
  });
  arr?.sort(sortByWasTested);
  console.log(arr[0]);
  collectionRef.doc(arr[0]?.id).update({
    isBeingReviewed: true,
  });

  return arr[0]?.id;
};

export const getAllTtitles = async () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  const db = firebase.firestore();
  const collectionRef = db.collection(listOfAllMovies);
  const snapshot = await collectionRef.get();
  const arr: string[] = [] as string[];
  snapshot.forEach((doc) => {
      arr.push(doc.id);
  });

  return arr
};


const stringToNumberField = (shotType: String) => {
  const increment = firebase.firestore.FieldValue.increment(1);

  for (const key in SHOT_TYPES) {
    const value: string = SHOT_TYPES[key];
    console.log(value);
    if (shotType === value) {
      return { [value]: increment };
    }
  }
};

export const setData = (movieFrames: MovieFrame[]) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  let ISCORRECT: boolean = false;
  const collectionName: string = movieFrames[0].movieName;
  console.log(collectionName);
  const db = firebase.firestore();
  let collectionRef = db.collection(collectionName);
  movieFrames.forEach((movie) => {
    collectionRef
      .doc(movie.frameId)
      .update(stringToNumberField(movie.shotType)!)
      .then(() => (ISCORRECT = true))
      .catch((error) => console.log(error));
  });
  collectionRef = db.collection(listOfAllMovies);
  //release
  const increment = firebase.firestore.FieldValue.increment(1);
  collectionRef.doc(collectionName).update({
    isBeingReviewed: false,
    wasTested: increment,
  });

  return ISCORRECT;
};


export async function DELETE_ALL_COLLECTIONS(allMovies:string[]) {
  const batchSize:number = 75;
  const db = firebase.firestore();

  allMovies.forEach(element => {
    const collectionRef = db.collection(element);
    const query = collectionRef.orderBy('__name__').limit(batchSize);
  
    return new Promise((resolve, reject) => {
      deleteQueryBatch(db, query, resolve).catch(reject);
    });
    
  });



}

async function deleteQueryBatch(db, query, resolve) {
  const snapshot = await query.get();

  const batchSize = snapshot.size;
  if (batchSize === 0) {
    // When there are no documents left, we are done
    resolve();
    return;
  }

  // Delete documents in a batch
  const batch = db.batch();
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch.commit();

  process.nextTick(() => {
    deleteQueryBatch(db, query, resolve);
  });
}
