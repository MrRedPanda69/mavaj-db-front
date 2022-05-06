import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import Alert from '../components/Alert';

const NewPassword = () => {
    const params = useParams();
    const { token } = params;

    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({});
    const [validToken, setValidToken] = useState(false);
    const [passwordModified, setPasswordModified] = useState(false);

    useEffect(() => {
        const validateToken = async () => {
            try {
                await axios(`${import.meta.env.VITE_BACKEND_URL}/api/users/forgotten-password/${token}`);
                setValidToken(true);
                
            } catch (error) {
                setAlert({
                    msg: error.response.data.msg,
                    error: true
                });
            }
        }
        validateToken();
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();

        if(password.length < 6) {
            setAlert({
                msg: 'Password needs to be at least 6 characters long',
                error: true

            });
            return;
        }

        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/users/forgotten-password/${token}`;
            const { data } = await axios.post(url, {password});

            setAlert({
                msg: data.msg,
                error: false
            });
            setValidToken(false);
            setPasswordModified(true);
            
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            });
        }
    }
    
    const { msg } = alert;

    return (
        <>
            <h1 className="text-emerald-700 capitalize font-black text-6xl">
                Restablish your <span className='text-slate-50'>Password</span>
            </h1>

            {msg && <Alert alert={alert} />}

            {validToken && (
                <form 
                    className='my-10 bg-white shadow-white rounded-lg px-8 py-3'
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label 
                            className='uppercase text-zinc-700 block text-xl font-bold'
                            htmlFor='password'
                        >New Password</label>
                        <input 
                        id='password'
                            type='password' 
                            placeholder='Enter your new password' 
                            className='text-zinc-700 w-full  mt-3 p-3 border rounded-xl bg-zinc-200'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type='submit'
                        className='bg-emerald-700 w-full rounded-xl mt-5 mb-2 py-3 uppercase font-bold hover:cursor-pointer hover:bg-emerald-900 transition-colors'
                    >Create new password</button>
                </form>
            )}

            
            {passwordModified && (
                    <Link
                    className='block text-center my-5 text-slate-50 uppercase text-sm font-bold'
                    to='/'          
                    >Log In</Link>
            )}
        </>
    )
}

export default NewPassword;