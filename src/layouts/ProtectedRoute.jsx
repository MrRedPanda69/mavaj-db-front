import { Outlet, Navigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const ProtectedRoute = () => {
    const { auth, loading } = useAuth();
    
    if(loading) 
    return (
        <div className='border border-emerald-900 shadow rounded-md p-4 max-w-sm w-full mx-auto'>
            <div className='animate-pulse flex space-x-4'>
                <div className='rounded-full bg-slate-500 h-10 w-10'></div>
                <div className='flex-1 space-y-6 py-1'>
                    <div className='h-2 bg-slate-500 rounded'></div>
                    <div className='space-y-3'>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='h-2 bg-slate-500 rounded col-span-2'></div>
                            <div className='h-2 bg-slate-500 rounded col-span-1'></div>
                        </div>
                        <div className='h-2 bg-slate-500 rounded'></div>
                    </div>
                </div>
            </div>
        </div>
    )

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