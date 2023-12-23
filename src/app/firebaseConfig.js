
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAf6TvhttsdSaWEjWpNpx3Ezve8BMHI6vg",
  authDomain: "to-do-8f684.firebaseapp.com",
  projectId: "to-do-8f684",
  storageBucket: "to-do-8f684.appspot.com",
  messagingSenderId: "280726509712",
  appId: "1:280726509712:web:8cc33d35ae0088d3b76015"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};