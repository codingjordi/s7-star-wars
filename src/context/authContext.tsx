import { GoogleAuthProvider, User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser} from "firebase/auth";
import { auth } from "../firebase/config";
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext<any | null>(null)

export const useAuth = () => {
    const context = useContext(AuthContext)
     
    if(!context) {
        throw new Error ('Error creating auth context')
    }
    return context;
}

export function AuthProvider({ children }) {

    const [user, setUser] = useState<User | null>()

    useEffect(() => {
        const suscribed = onAuthStateChanged(auth, (currentUser) => {
          if(currentUser){
            setUser(currentUser)
            console.log('hay alguien subscribed ', currentUser)
          } else {
            setUser(undefined)
            console.log('no hay usuario suscrito o acaban de log out')
          }
        })
        return () => suscribed();
      }, [])

    const register = async (email, password) => {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        console.log(response)
    }

    const login = async (email, password) => {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log(response)
    }

    const loginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider()
        return signInWithPopup(auth, responseGoogle)
    }

    const logout = async () => {
        const response = await signOut(auth)
        console.log(response)
    }

    return (
        <AuthContext.Provider value={{
            register,
            login,
            loginWithGoogle,
            logout,
            user,
            setUser
        }} >
            {children}
        </AuthContext.Provider>
    );
}