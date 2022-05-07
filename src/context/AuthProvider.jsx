import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import clientAxios from '../config/clientAxios';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    
    useEffect(() => {
        const userAuth = async () => {
            const token = localStorage.getItem('token');
            if(!token) {
                setLoading(false);
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
                navigate('/projects');
                
            } catch (error) {
                console.log(error);
            } 
            
            setLoading(false);
        }
        userAuth();
    }, []);
    

    return (
        <AuthContext.Provider
            value={{
                auth,
                loading,
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