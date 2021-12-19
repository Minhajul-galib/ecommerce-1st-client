import { useState, useEffect } from "react";
import initializeFirebase from "../Pages/LogInType/FireBase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";

// init firebase
initializeFirebase();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();

    const registerUser = (email, password, name, history) =>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                setAuthError('');
                const newUser = {email, displayName: name};

                setUser(newUser);
                saveUser(email, name, 'POST');
                // ...

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) =>{

                });
                history.replace('/');
              })
              .catch((error) => {
                setAuthError(error.message);
                // ..
              })
              .finally(()=> setIsLoading(false));
        }

        const loginUser = (email, password, location, history) =>{
            setIsLoading(true);
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
                // ...
            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(()=> setIsLoading(false));
        }


    // observe user state
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             
              setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
          });
          return ()=> unSubscribe;
    }, [auth])

    useEffect(()=>{
        fetch(`https://frozen-oasis-37685.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth).then(()=>{

        }).catch((error)=>{
            // an error!
        })
        .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) =>{
        const user = {email, displayName}

        fetch('https://frozen-oasis-37685.herokuapp.com/users', {
            method: method,
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    } 


    return{
        user,
        admin,
        isLoading,
        registerUser,
        authError,
        loginUser,
        logOut

    }
}

export default useFirebase;