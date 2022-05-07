import { Link } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const Sidebar = () => {
    const { auth } = useAuth();

    return (
        <aside className='md:w-80 lg:w-96 px-5 py-10 bg-zinc-700'>
            <p className="text-xl font-bold">Hello {auth.userName}</p>

            <Link
                to='create-project'
                className='bg-gradient-to-br bg-emerald-700 w-full p-3 uppercase font-bold block mt-5 rounded-md text-center hover:bg-emerald-900 transition-colors'
            >New Project</Link>
        </aside>
    )
}

export default Sidebar