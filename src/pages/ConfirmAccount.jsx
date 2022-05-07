import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Alert from '../components/Alert';
import clientAxios from '../config/clientAxios';

const ConfirmAccount = () => {
    const [alert, setAlert] = useState({});
    const [accountConfirmed, setAccountConfirmed] = useState(false);

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        const confirmAccount = async () => {
            try {
                const url = `/users/confirm/${id}`;
                const { data } = await clientAxios(url);
                
                setAlert({
                    msg: data.msg,
                    error: false
                });

                setAccountConfirmed(true);

            } catch (error) {
                setAlert({
                    msg: error.response.data.msg,
                    error: true
                });
            }
        } 
        confirmAccount();
    }, []);

    const { msg } = alert;

    return (
        <>
            <h1 className="text-emerald-700 capitalize font-black text-6xl">
                Confirm your <span className='text-slate-50'>Account</span>
            </h1>

            <div className='mt-20 md:mt-10 shadow-lg px-5 py-5 rounded-xl bg-white'>
                {msg && <Alert alert={alert} />}
                {accountConfirmed && (
                    <Link
                    className='block text-center my-5 text-zinc-700 uppercase text-sm font-bold'
                    to='/'          
                    >Log In</Link>
                )}
            </div>
        </>
    )
}

export default ConfirmAccount;