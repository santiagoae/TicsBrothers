import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXdz0yI-9IAiQ3q5EocgTZ80m1JlobGTQ",
  authDomain: "bdticbrothers.firebaseapp.com",
  projectId: "bdticbrothers",
  storageBucket: "bdticbrothers.appspot.com",
  messagingSenderId: "308830909204",
  appId: "1:308830909204:web:d4f3455fecbd12ba934801",
  measurementId: "G-32JN7FT0SZ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



