// src/firebase/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZAE1m53N8UP4hzGPAYDElV_ZeTRsyHng", // Clave real del proyecto
  authDomain: "web-intelimatic.firebaseapp.com",
  projectId: "web-intelimatic",
  storageBucket: "web-intelimatic.appspot.com",
  messagingSenderId: "872018837750",
  appId: "1:872018837750:web:25a4d4647ef0c0c83e6cd7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
