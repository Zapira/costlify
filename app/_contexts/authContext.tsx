import { createContext, useEffect, useState } from "react";
import { AuthChecking } from "../_services/authCheck";

const authCache = {
    isLoggedIn: false,
    user: null
}

const AuthContext = createContext({
    isLoggedIn: false,
    user: null
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState(authCache.user);
    const [isLoggedIn, setIsLoggedIn] = useState(authCache.isLoggedIn);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await AuthChecking();
                console.log("Auth Check Response:", response);
                if (response) {
                    setUser(response);
                    setIsLoggedIn(true);
                } else {
                    setUser(null);
                    setIsLoggedIn(false);
                    
                    if (window.location.pathname !== "/auth/login") {
                        window.location.href = "/auth/login";
                    }
                }
            } catch (error) {
                setUser(null);
                setIsLoggedIn(false);
            } 
        };

        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;