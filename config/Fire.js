import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAYmhoJ3W1WE-EOmZI6IH-9u6jcnNaGwdI",
  authDomain: "login-app-797f0.firebaseapp.com",
  databaseURL: "https://login-app-797f0.firebaseio.com",
  projectId: "login-app-797f0",
  storageBucket: "login-app-797f0.appspot.com",
  messagingSenderId: "334633514153",
  appId: "1:334633514153:web:3c4c296ea6983c5f7125b8",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
