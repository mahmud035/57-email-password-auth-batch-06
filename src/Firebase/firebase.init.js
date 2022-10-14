import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBiCLXyIhWoDfaPj5E537kfuzlD_p_w4JA',
  authDomain: 'email-password-auth-e4862.firebaseapp.com',
  projectId: 'email-password-auth-e4862',
  storageBucket: 'email-password-auth-e4862.appspot.com',
  messagingSenderId: '890615767254',
  appId: '1:890615767254:web:68dd5735241a36fb0c6977',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
