import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='px-4 py-5 bg-gradient-to-br from-emerald-600 to-emerald-700 border-b-zinc-700'>
            <div className="md:flex md:justify-between">
                <h2 className="text-4xl font-black">
                    AduanaProj
                </h2>

                <input 
                    type='search' 
                    placeholder='Find project'
                    className='rounded-lg lg:w-96 block p-2 border-b-zinc-700 capitalize'
                />

                <div className='flex items-center gap-4'>
                    <Link
                        to='/projects'
                        className='font-bold uppercase'
                    >
                        <div className='flex justify-between gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                                <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
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
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;