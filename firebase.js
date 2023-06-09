import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpb1-3U22I3ajHcTFoUnwIAajzRu64KNo",
  authDomain: "meraki-corner.firebaseapp.com",
  projectId: "meraki-corner",
  storageBucket: "meraki-corner.appspot.com",
  messagingSenderId: "384440845152",
  appId: "1:384440845152:web:92ce7ab8428ac30c029405",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
