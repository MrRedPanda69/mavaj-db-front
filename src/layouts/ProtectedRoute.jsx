import { Outlet, Navigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const ProtectedRoute = () => {
    const { auth } = useAuth;
    console.log(auth);

    return (
        <div>ProtectedRoute</div>
    )
}

export default ProtectedRoute;