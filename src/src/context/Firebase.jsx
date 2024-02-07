import { createContext , useContext } from "react";
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyDMuHpZbiRsGhD8IyNGALlJ-Kn01jAWoqY",
    authDomain: "new-healthcare-ce89e.firebaseapp.com",
    projectId: "new-healthcare-ce89e",
    storageBucket: "new-healthcare-ce89e.appspot.com",
    messagingSenderId: "333206595118",
    appId: "1:333206595118:web:a927b5b1c3f10acf6a61bf"
  };


 export const useFirebase = ()=>useContext(FirebaseContext);

 const firebaseApp = initializeApp(firebaseConfig);
 const firebaseAuth = getAuth(firebaseApp);

 const googleProvider = new GoogleAuthProvider();

 const app = initializeApp(firebaseConfig);


export const FirebaseProvider = (props)=>{

    const signupUserWithEmailAndPassword=(email,password)=>
    createUserWithEmailAndPassword(firebaseAuth,email,password);

    const signinUserWithEmailAndPass = (email,password)=>
    signInWithEmailAndPassword(firebaseAuth,email,password);

    const signWithGoogle=()=>signInWithPopup(firebaseAuth,googleProvider)
    return(
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, signinUserWithEmailAndPass,signWithGoogle}}>
            {props.children}
        </FirebaseContext.Provider>
    );
};