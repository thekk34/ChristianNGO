import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  FacebookAuthProvider, 
  TwitterAuthProvider, 
  RecaptchaVerifier, 
  signInWithPhoneNumber 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHYiLeW0GdsDP27g-qMnocjYoJnzeOCLY",
  authDomain: "christian-ngo.firebaseapp.com",
  projectId: "christian-ngo",
  storageBucket: "christian-ngo.firebasestorage.app",
  messagingSenderId: "164078942576",
  appId: "1:164078942576:web:4de7f100e6336bd584b7b5",
  measurementId: "G-RDD31HCELS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export { auth, googleProvider, facebookProvider, twitterProvider, RecaptchaVerifier, signInWithPhoneNumber };
