import * as firebase from 'firebase';
import { LoginStore } from 'LocalStorage';

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

export const isAuthenticated = () => {
  return !!firebaseAuth.currentUser || !!LoginStore.authenticated();
}
