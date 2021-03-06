import { useState } from 'react';
import { Link } from 'react-router-dom';

import Alert from '../components/Alert';
import clientAxios from '../config/clientAxios';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [ alert, setAlert] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();

        if([userName, email, password, repeatPassword].includes('')) {
            setAlert({
                msg: 'All fields are required',
                error: true
            });

            setTimeout(() => {
                setAlert({});
            }, 5000);
            return;
        }

        if(password !== repeatPassword) {
            setAlert({
                msg: 'Your passwords do not match',
                error: true
            });

            setTimeout(() => {
                setAlert({});
            }, 5000);
            return;
        }

        if(password.length < 6) {
            setAlert({
                msg: 'Your password is too weak, use at least 6 characters',
                error: true
            });

            setTimeout(() => {
                setAlert({});
            }, 5000);
            return;
        }

        setAlert({});

        // Create user on API
        try {
            const { data } = await clientAxios.post('/users', {userName, email, password});
            setAlert({
                msg: data.msg,
                error: false
            });

            setTimeout(() => {
                setAlert({});
            }, 5000);

            setUserName('');
            setEmail('');
            setPassword('');
            setRepeatPassword('');
            
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            });

            setTimeout(() => {
                setAlert({});
            }, 5000);
        }
    }

    const { msg } = alert;

    return (
        <>
            <h1 className="text-emerald-700 capitalize font-black text-6xl">
                Create a new <span className='text-slate-50'>Account</span>
            </h1>

            {msg && <Alert alert={alert} />}

            <form 
                className='my-10 bg-white shadow-white rounded-lg px-8 py-3'
                onSubmit={handleSubmit}
            >
                <div>
                    <label 
                        className='uppercase text-zinc-700 block text-xl font-bold'
                        htmlFor='name'
                    >Name</label>
                    <input 
                    id='name'
                        type='text' 
                        placeholder='Enter your name' 
                        className='text-zinc-700 w-full  mt-3 p-3 border rounded-xl bg-zinc-200'
                        autoComplete='off'
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                </div>

                <div>
                    <label 
                        className='uppercase text-zinc-700 block text-xl font-bold'
                        htmlFor='email'
                    >Email</label>
                    <input 
                    id='email'
                        type='email' 
                        placeholder='Enter your email' 
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
                        placeholder='Create a password' 
                        className='text-zinc-700 w-full  mt-3 p-3 border rounded-xl bg-zinc-200'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <label 
                        className='uppercase text-zinc-700 block text-xl font-bold'
                        htmlFor='password2'
                    >Confirm Your Password</label>
                    <input 
                    id='password2'
                        type='password' 
                        placeholder='Enter your password again' 
                        className='text-zinc-700 w-full  mt-3 p-3 border rounded-xl bg-zinc-200'
                        value={repeatPassword}
                        onChange={e => setRepeatPassword(e.target.value)}
                    />
                </div>

                <button
                    type='submit'
                    className='bg-gradient-to-br from-emerald-600 to-emerald-700 w-full rounded-xl mt-5 mb-2 py-3 uppercase font-bold hover:cursor-pointer hover:bg-emerald-900 transition-colors'
                >Sign up</button>

                <nav className="lg:flex lg:justify-between">
                    <Link
                        className='block text-center my-5 text-zinc-700 uppercase text-sm font-bold'
                        to='/'
                    >Already have an account? Log In</Link>
                    
                    <Link
                        className='block text-center my-5 text-zinc-700 uppercase text-sm font-bold'
                        to='/forgotten-password'
                    >Forgot my password</Link>
                </nav>
            </form>
        </>
    )
}

export default Register;