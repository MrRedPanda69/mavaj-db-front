import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';

import ConfirmAccount from './pages/ConfirmAccount';
import ForgottenPassword from './pages/ForgottenPassword';
import NewPassword from './pages/NewPassword';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Register from './pages/Register';

import { AuthProvider } from './context/AuthProvider';

import ProtectedRoute from './layouts/ProtectedRoute';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<AuthLayout />}>
                        <Route index element={<Login />} />
                        <Route path='register' element={<Register />} />
                        <Route path='forgotten-password' element={<ForgottenPassword />} />
                        <Route path='forgotten-password/:token' element={<NewPassword />} />
                        <Route path='confirm/:id' element={<ConfirmAccount />} />
                    </Route>

                    <Route path='/projects' element={<ProtectedRoute />}>
                        <Route index element={<Projects />}>

                        </Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App;
