import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, doc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore';
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain:import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APPID,
  measurementId:import.meta.env.VITE_MEASUREMENT_ID
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async ( username, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword( auth, email, password );
        const user = res.user;
        await setDoc( doc( db, "users", user.uid ), {
            id: user.uid,
            username: username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey there, im using chat app",
            lastSeen: Date.now(),

        })
        await setDoc(doc( db, "chat", user.uid ), {
            chatData:[]
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async ( email, password ) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = async () => {
    try {
        await signOut( auth )
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const resetPass = async (email) => {
    if(!email){
        toast.error("Enter your email")
        return null;
    }
    try {
        const userRef = collection(db, "users");
        const q = query(userRef, where("email", "==",email));
        const querySnap = await getDocs(q);
        if( !querySnap.empty ){
            await sendPasswordResetEmail(auth, email);
            toast.success("Reset email sent");
        }else {
            toast.error("Email doesnt exist");
        }
    } catch (error) {
        console.error(error);
        toast.error(error.message);
    }
}

export { signup, login, logout, auth, db, resetPass };
