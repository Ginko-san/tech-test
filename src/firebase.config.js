import firebase from 'firebase';

/**
 * IMPORTANT NOTE:
 * This shouldn't be here, this needs to be behind an
 * api and into env variables, but due to time we're
 * going to leave it here as it.
 */
const firebaseConfig = {
  apiKey: 'AIzaSyCCMhQsaVx3M_11jZK8TBtFIglAVsIcLlE',
  authDomain: 'tech-test-de735.firebaseapp.com',
  projectId: 'tech-test-de735',
  storageBucket: 'tech-test-de735.appspot.com',
  messagingSenderId: '290131768807',
  appId: '1:290131768807:web:4baf6495dd493b48fe7942',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
