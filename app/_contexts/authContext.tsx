import { createContext, useEffect, useState } from "react";
import { AuthChecking } from "../_services/authCheck";

const AuthContext = createContext({
    isLoggedIn: false,
    user: null,
    loading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await AuthChecking();

                if (response) {
                    setUser(response);
                    setIsLoggedIn(true);
                } else {
                    setUser(null);
                    setIsLoggedIn(false);

                    // ❗ jangan redirect kalau sudah di login page
                    if (window.location.pathname !== "/auth/login") {
                        window.location.href = "/auth/login";
                    }
                }
            } catch (error) {
                setUser(null);
                setIsLoggedIn(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;