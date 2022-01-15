// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbtUxeE65Xx3mNvcsrWYlWjViqpgdQy94",
  authDomain: "myshopp-7ff08.firebaseapp.com",
  projectId: "myshopp-7ff08",
  storageBucket: "myshopp-7ff08.appspot.com",
  messagingSenderId: "249032593540",
  appId: "1:249032593540:web:e43676ce96200d519472d1",
  measurementId: "G-SY5S3360BG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

//////////        our js code        ////////////

let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let username = document.querySelector("#username");
const signUpForm = document.querySelector("form");
const article = document.querySelector("article");

const signupbtn = document.querySelector(".signupbtn");
const loginbtn = document.querySelector(".loginbtn");

// const message = document.querySelector(".message");

signupbtn.addEventListener("click", signupFunc);
loginbtn.addEventListener("click", signinFunc);

///////// sign out //////////

auth.signOut().then(() => {
  console.log("signed out");
});

///////// auth state checking //////////

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    const uid = user.uid;
    console.log(user);
    console.log(uid);
    console.log(user.email);
    article.innerHTML = `<p>Thank you for shopping with us</p>`;
  } else {
    // User is not signed in
    console.log("user is not logged in");
    signUpForm.style.display = "block";
  }
});

///////// Sign up function //////////

function signupFunc(e) {
  e.preventDefault();
  console.log(" signed up");
  createUserWithEmailAndPassword(auth, email.value, pass.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      signUpForm.style.display = "none";
      alert("Hi, Successfull Sign Up !");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

///////// Sign In function //////////

function signinFunc(e) {
  e.preventDefault();
  console.log(" signed in");
  signInWithEmailAndPassword(auth, email.value, pass.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      signUpForm.style.display = "none";
      alert("Hi, Successfull Log In !");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}
