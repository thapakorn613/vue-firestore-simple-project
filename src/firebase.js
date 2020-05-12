import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyDaGe9eovnSfUyeFYAL114s0AslUzjszIk",
  authDomain: "sj2-dashboard-web.firebaseapp.com",
  databaseURL: "https://sj2-dashboard-web.firebaseio.com",
  projectId: "sj2-dashboard-web",
  storageBucket: "sj2-dashboard-web.appspot.com",
  messagingSenderId: "196642386006",
  appId: "1:196642386006:web:df5ca9834a0f75fcaa0bf7",
  measurementId: "G-JLVEM4GWTY"
});

export const db = app.firestore();
export const messagesCollection = db.collection("messages");
