 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAIY1h6OJUobVMg6jn8dnL19Z2aPPK2DME",
    authDomain: "cst-e-library.firebaseapp.com",
    projectId: "cst-e-library",
    storageBucket: "cst-e-library.appspot.com",
    messagingSenderId: "900296307418",
    appId: "1:900296307418:web:6ae8ab883fd82ec820abe3",
    measurementId: "G-7HW64ZYWC5"

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);