import { Outlet, Navigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const ProtectedRoute = () => {
    const { auth, loading } = useAuth();
    
    if(loading) return 'Loading'

    return (
        <>
            {auth._id ? 
            (
                <div className='bg-zinc-700'>
                    <Header />
                    <div className='md:flex md:min-h-screen'>
                        <Sidebar />
                        <main className='p-10 flex-1 bg-zinc-400'>
                            <Outlet />
                        </main>
                    </div>
                </div>
            )
            : <Navigate to='/' />}
        </>
    )
}

export default ProtectedRoute;