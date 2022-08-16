import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export function registerUser({email, password}) {
    
    return createUserWithEmailAndPassword(auth, email, password)

}



