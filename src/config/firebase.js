import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIodjZsXYnsdgnJBwhMkG-HAXtJb8cv-4",
  authDomain: "cryptoneves-631bd.firebaseapp.com",
  projectId: "cryptoneves-631bd",
  storageBucket: "cryptoneves-631bd.appspot.com",
  messagingSenderId: "888846500319",
  appId: "1:888846500319:web:453661f7d4cac25301c46a"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp)

export { auth, db}