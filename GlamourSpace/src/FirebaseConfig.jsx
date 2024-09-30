import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAh5RmwGU9cLX1gJ290OD6m0Lz_vE3Xfyw",
  authDomain: "inventory-944ed.firebaseapp.com",
  projectId: "inventory-944ed",
  storageBucket: "inventory-944ed.appspot.com",
  messagingSenderId: "589958872146",
  appId: "1:589958872146:web:6d3e6fd54893302382738b",
  measurementId: "G-KY13SG28R1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage};