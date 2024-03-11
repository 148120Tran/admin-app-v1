// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyAt7rccbP_P-yTZNaQEIsuwIdvfSxy1n1c",
//   authDomain: "netflix-e11c9.firebaseapp.com",
//   projectId: "netflix-e11c9",
//   storageBucket: "netflix-e11c9.appspot.com",
//   messagingSenderId: "415975859169",
//   appId: "1:415975859169:web:e7b0580b6801bf0aac28a0",
//   measurementId: "G-K6XR10Z4FH",
// };

// firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();
// export default storage;

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAt7rccbP_P-yTZNaQEIsuwIdvfSxy1n1c",
  authDomain: "netflix-e11c9.firebaseapp.com",
  projectId: "netflix-e11c9",
  storageBucket: "netflix-e11c9.appspot.com",
  messagingSenderId: "415975859169",
  appId: "1:415975859169:web:e7b0580b6801bf0aac28a0",
  measurementId: "G-K6XR10Z4FH",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
