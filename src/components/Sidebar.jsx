import { Link } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const Sidebar = () => {
    const { auth } = useAuth();

    return (
        <aside className='md:w-1/3 lg:w-1/5 xl:w-1/6 px-5 py-10 bg-zinc-700'>
            <p className="text-xl font-bold">Hello {auth.userName}</p>

            <Link
                to='create-project'
                className='bg-gradient-to-br bg-emerald-700 w-full p-3 uppercase font-bold block mt-5 rounded-md text-center hover:bg-emerald-900 transition-colors'
            >
                <div className='flex gap-1 items-center justify-center'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-7 w-7" 
                    viewBox="0 0 20 20" 
                    fill="currentColor">
                    <path 
                        fillRule="evenodd" 
                        d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" />
                </svg>
                    New Project
                </div>
            </Link>
        </aside>
    )
}

export default Sidebar