import { createContext, useContext, useState, useEffect } from "react";
import {auth} from "./firebase"

const userContext = createContext(null)

export const UserProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
        setLoading(false);
    });

    return () => unsubscribe();
}, [])

return(
    <userContext.Provider value={{user, loading}}>
        {children}
    </userContext.Provider>
)}

export const useUser = () => useContext(userContext)