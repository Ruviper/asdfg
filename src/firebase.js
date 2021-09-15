import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getDatabase } from 'firebase/database';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCkzV99nmEkGgRBimdnqADhRnQD2afKJAA",
  authDomain: "accounter-ruben.firebaseapp.com",
  projectId: "accounter-ruben",
  storageBucket: "accounter-ruben.appspot.com",
  messagingSenderId: "697600927545",
  appId: "1:697600927545:web:f8cf3bea1aca4eb15b6ae8",
  measurementId: "G-GRJCY3RBXL"
});

export const auth = app.auth();
export const db = getDatabase();
export default app;
