import { Link } from 'react-router-dom';

const NewPassword = () => {
    return (
        <>
            <h1 className="text-emerald-700 capitalize font-black text-6xl">
                Restablish your <span className='text-slate-50'>Password</span>
            </h1>

            <form className='my-10 bg-white shadow-white rounded-lg px-8 py-3'>
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
                    />
                </div>

                <button
                    type='submit'
                    className='bg-emerald-700 w-full rounded-xl mt-5 mb-2 py-3 uppercase font-bold hover:cursor-pointer hover:bg-emerald-900 transition-colors'
                >Create new password</button>
            </form>
        </>
    )
}

export default NewPassword;