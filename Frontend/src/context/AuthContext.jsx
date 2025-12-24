import {createContext, useState, useContext, useEffect } from "react";
import {registerRequest, loginRequest, verifyTokenRequest} from "../api/auth.js"
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true)

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            window.localStorage.setItem("token", res.data.token)
            setUser(res.data)
            setIsAuthenticated(true)      
        } catch (error) {
            console.log(error)
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res.data);
            window.localStorage.setItem("token", res.data.token)
            setUser(res.data)
            setIsAuthenticated(true) 
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        Cookies.remove("token");
        setIsAuthenticated(false)
        setUser(null)
    }

    useEffect(() => {
            async function checkLogin() {
                try {
                    const res = await verifyTokenRequest();
                    
                    if (!res.data) {
                        setIsAuthenticated(false);
                        setLoading(false);
                        return;
                    }

                    // Si el backend dice OK, restauramos usuario
                    setIsAuthenticated(true);
                    setUser(res.data);
                    setLoading(false);
                } catch (error) {
                    // Si la cookie no existe o es invalida, el backend tira error
                    setIsAuthenticated(false);
                    setUser(null);
                    setLoading(false);
                }
            }
            checkLogin();
        }, []);

    return(
        <AuthContext.Provider value={{
            signup,
            signin,
            logout,
            user,
            isAuthenticated,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    )
}