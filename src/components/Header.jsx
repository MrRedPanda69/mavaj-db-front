import { Link } from 'react-router-dom';

import Search from './Search';

import useProjects from '../hooks/useProjects';

const Header = () => {
    const { handleSearcher } = useProjects();

    return (
        <header className='px-4 py-5 bg-gradient-to-br from-emerald-600 to-emerald-700 border-b-zinc-700'>
            <div className="md:flex md:justify-between">
                <h2 className="text-4xl font-black text-center mb-5 md:mb-0">
                    MAVAJ
                </h2>

                <div className='flex flex-col md:flex-row items-center gap-6'>
                    <button
                        type='button'
                        className='font-bold uppercase flex gap-1 items-center'
                        onClick={handleSearcher}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                        Find Project
                    </button>

                    <Link
                        to='/projects'
                        className='font-bold uppercase'
                    >
                        <div className='flex justify-between gap-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                        </svg>
                            Projects
                        </div>
                    </Link>

                    <button
                        type='button'
                        className='text-sm bg-red-500 p-3 rounded-md uppercase font-bold items-center'
                    >
                        <div className='flex justify-between gap-2'>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Log Out

                            <Search />
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;