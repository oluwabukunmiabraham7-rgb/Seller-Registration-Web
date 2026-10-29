// MARKET EXPRESS Firebase client connection. Web config is public by design; protect data with Firebase Rules.
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Existing MARKET EXPRESS Firebase project from the original site.
const firebaseConfig = {
  apiKey: "AIzaSyC1w8tUDW6XTfkPceprjj1kJed9CM5r6YA",
  authDomain: "enitan-collection-7e541.firebaseapp.com",
  projectId: "enitan-collection-7e541",
  storageBucket: "enitan-collection-7e541.firebasestorage.app",
  messagingSenderId: "652278502258",
  appId: "1:652278502258:web:7e3058b2f96570c728c3eb"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// Long polling can be more reliable on some mobile networks.
const db = initializeFirestore(app, { experimentalForceLongPolling: true });
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, db, storage };
