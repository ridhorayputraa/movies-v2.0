// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    createUserWithEmailAndPassword,
    getAuth,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAb-cpvHYuQUy0D51p2dyOpyDiEUoFMWp8",
    authDomain: "databasedummy-ok031003.firebaseapp.com",
    projectId: "databasedummy-ok031003",
    storageBucket: "databasedummy-ok031003.appspot.com",
    messagingSenderId: "888588696594",
    appId: "1:888588696594:web:feea77f7e1bc4157692ccb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


// 1.) Register
const Register = async(email, password) => {
    try {
        const responseRegister = await createUserWithEmailAndPassword(auth, email, password)
        console.log('berhasil registrasi', responseRegister.user)
    } catch (errr) {
        console.log('error code', errr.code);
        console.log('error meesage', errr.message);
    }
}

// 2.) Login
const Login = async(email,password) => {
try{
    const responseLogin = await  signInWithEmailAndPassword(auth,email,password);
     console.log('berhasil login', responseLogin)
}catch (errr) {
    console.log('error code', errr.code);
      console.log('error meesage', errr.message);
 
      return errr
}

}


// 3.) Reset
const Reset = async(email, password) => {
    try{
         await sendPasswordResetEmail(auth,email,password)
    }catch (errr) {
        console.log('error code', errr.code);
        console.log('error meesage', errr.message);
    }
}

// 4.) Logout

const Logout = async() => {
    try{
        await signOut(auth)
    }catch (errr) {
        console.log('error code', errr.code);
        console.log('error meesage', errr.message);
    }
}

export{
    auth,
     Register,
     Login,
     Reset,
     Logout
}