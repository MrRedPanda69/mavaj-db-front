import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='px-4 py-5 bg-gradient-to-br from-emerald-800 to-emerald-900 border-b-zinc-700'>
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
                    >Projects</Link>

                    <button
                        type='button'
                        className='text-sm bg-red-500 p-3 rounded-md uppercase font-bold'
                    >Log Out</button>
                </div>
            </div>
        </header>
    )
}

export default Header;