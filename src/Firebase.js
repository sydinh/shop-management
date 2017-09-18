import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCF6jvCTXZw1tdsu7I5JWaAi9uCmP40Z1U",
  authDomain: "shop-management-ba749.firebaseapp.com",
  databaseURL: "https://shop-management-ba749.firebaseio.com",
  projectId: "shop-management-ba749",
  storageBucket: "shop-management-ba749.appspot.com",
  messagingSenderId: "791773433267"
};
firebase.initializeApp(config);

export const auth = firebase.auth();

export default firebase;
