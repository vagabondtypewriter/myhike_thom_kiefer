//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBNDAp3BomWUcn4me3dLGvUdlIGaMZkb-o",

    authDomain: "comp1800-demo-557dd.firebaseapp.com",
  
    projectId: "comp1800-demo-557dd",
  
    storageBucket: "comp1800-demo-557dd.appspot.com",
  
    messagingSenderId: "1016923564677",
  
    appId: "1:1016923564677:web:1647d7fa15f0fb0e1a97ec"
  
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();