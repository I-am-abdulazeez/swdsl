import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDING_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const firebaseConfigAdmin: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY_ADMIN,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_ADMIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_ADMIN,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_ADMIN,
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDING_ID_ADMIN,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID_ADMIN,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID_ADMIN,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const adminApp = initializeApp(firebaseConfigAdmin, "admin-app");

export const firebaseAuth = getAuth(app);

export const firebaseFirestore = getFirestore(app);
export const fireaseFirestoreAdmin = getFirestore(adminApp);
