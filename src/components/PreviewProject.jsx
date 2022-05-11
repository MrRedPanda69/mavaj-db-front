import { Link } from 'react-router-dom';

const PreviewProject = ({project}) => {
    const { projectName, _id, projectClient } = project;
    return (
        <div className='bg-zinc-200 shadow mt-6 rounded-lg p-5 font-bold text-zinc-700 border-b flex flex-col md:flex-row'>
            <p className='flex-1'>
                {projectName} <span className='text-sm uppercase text-emerald-600 ml-2'>{projectClient}</span>
            </p>
            <Link
            className='text-zinc-200 hover:text-zinc-700 bg-emerald-700 p-3 rounded-md uppercase text-sm font-bold transition-colors flex gap-2 items-center justify-center'
                to={`${_id}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                    <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                </svg>
                See Project
            </Link>
        </div>
    )
}

export default PreviewProject;