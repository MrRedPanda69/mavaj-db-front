import { useState, useEffect, createContext } from 'react';
import clientAxios from '../config/clientAxios';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    
    useEffect(() => {
        const userAuth = async () => {
            const token = localStorage.getItem('token');
            if(!token) {
                return;
            }
            // console.log(token);

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            
            try {
                const { data } = await clientAxios('/users/profile', config);
                setAuth(data);
                
            } catch (error) {
                console.log(error);
            }
        }
        userAuth();
    }, []);
    

    return (
        <AuthContext.Provider
            value={{
                setAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export {
    AuthProvider
}

export default AuthContext;