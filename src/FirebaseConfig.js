import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCF6jvCTXZw1tdsu7I5JWaAi9uCmP40Z1U",
  authDomain: "shop-management-ba749.firebaseapp.com",
  databaseURL: "https://shop-management-ba749.firebaseio.com",
  projectId: "shop-management-ba749",
  storageBucket: "shop-management-ba749.appspot.com",
  messagingSenderId: "791773433267"
};

export const firebaseApp = firebase.initializeApp(config);
export const firebaseAuth = firebaseApp.auth();

export const storageKey = 'KEY_FOR_LOCAL_STORAGE';

export const isAuthenticated = () => {
  return !!firebaseAuth.currentUser || !!localStorage.getItem(storageKey);
}
