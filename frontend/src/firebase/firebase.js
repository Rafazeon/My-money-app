import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyCWogTwvzpf4xQiHm0yoZkHOOKBj3EOg4U",
  authDomain: "teste-47b21.firebaseapp.com",
  databaseURL: "https://teste-47b21.firebaseio.com",
  projectId: "teste-47b21",
  storageBucket: "teste-47b21.appspot.com",
  messagingSenderId: "364168951210"
};

const devConfig = {
  apiKey: "AIzaSyCWogTwvzpf4xQiHm0yoZkHOOKBj3EOg4U",
  authDomain: "teste-47b21.firebaseapp.com",
  databaseURL: "https://teste-47b21.firebaseio.com",
  projectId: "teste-47b21",
  storageBucket: "teste-47b21.appspot.com",
  messagingSenderId: "364168951210"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
