import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result => {
            setUsers(result.user);
        })
        .finally(() => setLoading(false));

    }

    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(users) {
                setUsers(users);
            }
            else {
                setUsers({})
            }
            setLoading(false);
        });
        return () => unsubscribed;
    },[]);

    const logOut = () => {
        setLoading(true);
        signOut(auth)
        .then(() => {})
         .finally(() => setLoading(false));
    }

    return {
        users,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;