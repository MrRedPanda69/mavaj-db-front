import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';

import ConfirmAccount from './pages/ConfirmAccount';
import ForgottenPassword from './pages/ForgottenPassword';
import NewPassword from './pages/NewPassword';
import NewProject from './pages/NewProject';
import Login from './pages/Login';
import Project from './pages/Project';
import Projects from './pages/Projects';
import Register from './pages/Register';

import { AuthProvider } from './context/AuthProvider';
import { ProjectsProvider } from './context/ProjectProvider';

import ProtectedRoute from './layouts/ProtectedRoute';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <ProjectsProvider>
                    <Routes>
                        <Route path='/' element={<AuthLayout />}>
                            <Route index element={<Login />} />
                            <Route path='register' element={<Register />} />
                            <Route path='forgotten-password' element={<ForgottenPassword />} />
                            <Route path='forgotten-password/:token' element={<NewPassword />} />
                            <Route path='confirm/:id' element={<ConfirmAccount />} />
                        </Route>

                        <Route path='/projects' element={<ProtectedRoute />}>
                            <Route index element={<Projects />} />
                            <Route path='create-project' element={<NewProject />} />
                            <Route path=':id' element={<Project />} />
                        </Route>
                    </Routes>
                </ProjectsProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App;
