import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAsRumYrjFGeD2B1Q5eo9n6WaH4LJJEUcA",
	authDomain: "portfolio-project-00.firebaseapp.com",
	projectId: "portfolio-project-00",
	storageBucket: "portfolio-project-00.appspot.com",
	messagingSenderId: "198846666355",
	appId: "1:198846666355:web:bc8299db26dcd6105a7c06",
	measurementId: "G-6HVC8QZBS3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
