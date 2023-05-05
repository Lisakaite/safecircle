  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDL534D4NjKFMFaMIU5e9CM67Hoc3tz9j0",
    authDomain: "safe-circle-project.firebaseapp.com",
    projectId: "safe-circle-project",
    storageBucket: "safe-circle-project.appspot.com",
    messagingSenderId: "94977560350",
    appId: "1:94977560350:web:d0737a71ebca106495030f",
    measurementId: "G-BVW970QMEV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
