
const firebaseConfig = {
  apiKey: "AIzaSyAIY1h6OJUobVMg6jn8dnL19Z2aPPK2DME",
  authDomain: "cst-e-library.firebaseapp.com",
  projectId: "cst-e-library",
  storageBucket: "cst-e-library.appspot.com",
  messagingSenderId: "900296307418",
  appId: "1:900296307418:web:6ae8ab883fd82ec820abe3",
  measurementId: "G-7HW64ZYWC5"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


//Email login function 
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

    document.getElementById("logout-btn").style.display = "block";
    document.getElementById("login-btn").style.display = "none";

    document.getElementById("auth-form").style.display = "none";

    var user = firebase.auth().currentUser;

    if (user != null) {

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("logout-btn").style.display = "none";
    document.getElementById("login-btn").style.display = "block";
    document.getElementById("auht-form").style.display = "initial";

  }
});



function signup() {
  // New user signup here.
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);


  });

}




function login() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });

}


function logout() {
  firebase.auth().signOut();
  window.location.reload();
  // const reloadButton = document.querySelector("#logout-btn");
  // // Reload everything:
  // function reload() {
  //   reload = location.reload();
  // }
  // // Event listeners for reload
  // reloadButton.addEventListener("click", reload, false);
}





