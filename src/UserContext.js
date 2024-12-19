import { createContext, useContext, useState, useEffect } from "react";
import {auth} from "./firebase"

// import { db } from "./firebase"
// import { doc, getDoc } from 'firebase/firestore';

const userContext = createContext(null)

export const UserProvider = ({children}) => {

const [user, setUser] = useState(null)
// const [userData, setUserData] = useState({
//     toggles: {},
//     settings: {}
// })
const [loading, setLoading] = useState(true)

useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
        setLoading(false);
    });

    // const userPreferencesRef = doc(db, 'userPreferences', user.uid);
    // getDoc(userPreferencesRef).then((doc) => {
    //     if (doc.exists()) {
    //         setUserData(doc.data());
    //         console.log("Document data:", doc.data());
    //     } else {
    //         console.log("No such document!");
    //     }
    // }).catch((error) => {
    //     console.log("Error getting document:", error);
    // })

    return () => unsubscribe();
}, [])

return(
    <userContext.Provider value={{user, loading}}>
        {children}
    </userContext.Provider>
)}

export const useUser = () => useContext(userContext)