import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <h1 className="text-emerald-700 capitalize font-black text-6xl">
                Login and start your <span className='text-slate-50'>shipping</span>
            </h1>

            <form className='my-10 bg-white shadow-white rounded-lg px-8 py-3'>
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