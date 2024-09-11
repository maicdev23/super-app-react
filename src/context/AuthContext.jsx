import { createContext, useContext, useEffect, useState } from "react";

import { authUser, mainUser } from "../services/auth";

import Cookies from "js-cookie";

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) throw new Error('useAuth muest be used within an AuthProvider')

    return context
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const signin = async (user) => {
        try {
            const response = await authUser(user)
            Cookies.set('token', response.data.accessToken)
            setIsAuthenticated(true); setUser(response.data.usuario)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    const signout = () => {
        Cookies.remove('token'); location.reload();
    }

    useEffect(() => {
        async function verifyUser() {
            try {
                const response = await mainUser()
                setIsAuthenticated(true)
                setUser(response.data.user)
            } catch (error) {
                setIsAuthenticated(false); setUser(null)
            }
        }; verifyUser()
    }, [])

    return (
        <AuthContext.Provider value={{
            signin, user, isAuthenticated, signout
        }}>
            {children}
        </AuthContext.Provider>
    )
}