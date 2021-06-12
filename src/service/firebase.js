import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCyKqOvPQTQveVK1gFoE_V-1KIdnW_0SGc",
  authDomain: "card-maker-9e9a8.firebaseapp.com",
  projectId: "card-maker-9e9a8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
