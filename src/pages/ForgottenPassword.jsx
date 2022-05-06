import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Alert from '../components/Alert';

const ForgottenPassword = () => {
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();

        if(email === '' || email.length < 6) {
            setAlert({
                msg: 'You must provide a proper email',
                error: true
            });
            return;
        }

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/forgotten-password`, {email});
            
            setAlert({
                msg: data.msg,
                error: false
            })
            
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
                Gain access to your <span className='text-slate-50'>Account</span>
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
                        placeholder='Enter your email' 
                        className='text-zinc-700 w-full  mt-3 p-3 border rounded-xl bg-zinc-200'
                        autoComplete='off'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <button
                    type='submit'
                    className='bg-emerald-700 w-full rounded-xl mt-5 mb-2 py-3 uppercase font-bold hover:cursor-pointer hover:bg-emerald-900 transition-colors'
                >Send instructions</button>

                <nav className="lg:flex lg:justify-between">
                    <Link
                        className='block text-center my-5 text-zinc-700 uppercase text-sm font-bold'
                        to='/'
                    >Already have an account? Log In</Link>
                    
                    <Link
                        className='block text-center my-5 text-zinc-700 uppercase text-sm font-bold'
                        to='/register'
                    >Don't have an account? Sign Up</Link>
                </nav>

            </form>
        </>
    )
}

export default ForgottenPassword;