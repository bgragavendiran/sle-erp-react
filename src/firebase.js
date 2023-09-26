import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA849ZPDFSUw2nCaFoXVdbEJHXeY-Ud2tk",
    authDomain: "social-23e2e.firebaseapp.com",
    databaseURL: "https://social-23e2e.firebaseio.com",
    projectId: "social-23e2e",
    storageBucket: "social-23e2e.appspot.com",
    messagingSenderId: "958674967483",
    appId: "1:958674967483:web:63966942825f74b9ea429e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
