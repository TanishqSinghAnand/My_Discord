import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDYIPoI-ByCn9XDiqi73RQt9E3iQMKraAA",
    authDomain: "my-discord-54eb7.firebaseapp.com",
    databaseURL: "https://my-discord-54eb7.firebaseio.com",
    projectId: "my-discord-54eb7",
    storageBucket: "my-discord-54eb7.appspot.com",
    messagingSenderId: "77945904371",
    appId: "1:77945904371:web:c9532b6b117b294baceb86",
    measurementId: "G-J4V4LTHTQL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db  = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;