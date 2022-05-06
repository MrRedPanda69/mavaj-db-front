import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import Alert from '../components/Alert';
import clientAxios from '../config/clientAxios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({});

    const { setAuth } = useAuth();

    const handleSubmit = async e => {
        e.preventDefault();

        if([email, password].includes('')) {
            setAlert({
                msg: 'All field are required',
                error: true
            })
            return;
        }

        try {
            const { data } = await clientAxios.post('/users/login', {email, password});
            setAlert({});
            localStorage.setItem('token', data.token);
            setAuth(data);
            
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            })
        }
    }


    const { msg } = alert;

    return (
        <>
            <h1 className="text-emerald-700 capitalize font-black text-6xl">
                Login and start your <span className='text-slate-50'>shipping</span>
            </h1>

            {msg && <Alert alert={alert} />}

            <form 
                className='my-10 bg-white shadow-white rounded-lg px-8 py-3'
                onSubmit={handleSubmit}
            >
                <div>
                    <label 
                        className='uppercase text-zinc-700 block text-xl font-bold'
                        htmlFor='email'
                    >Email</label>
                    <input 
                    id='email'
                        type='email' 
                        placeholder='Registration email' 
                        className='text-zinc-700 w-full  mt-3 p-3 border rounded-xl bg-zinc-200'
                        autoComplete='off'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label 
                        className='uppercase text-zinc-700 block text-xl font-bold'
                        htmlFor='password'
                    >Password</label>
                    <input 
                    id='password'
                        type='password' 
                        placeholder='Enter your password' 
                        className='text-zinc-700 w-full  mt-3 p-3 border rounded-xl bg-zinc-200'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <button
                    type='submit'
                    className='bg-emerald-700 w-full rounded-xl mt-5 mb-2 py-3 uppercase font-bold hover:cursor-pointer hover:bg-emerald-900 transition-colors'
                >Login</button>

                <nav className="lg:flex lg:justify-between">
                    <Link
                        className='block text-center my-5 text-zinc-700 uppercase text-sm font-bold'
                        to='/register'
                    >Don't have an account? Sign Up</Link>
                    
                    <Link
                        className='block text-center my-5 text-zinc-700 uppercase text-sm font-bold'
                        to='/forgotten-password'
                    >Forgot my password</Link>
                </nav>
            </form>
        </>
    )
}

export default Login;