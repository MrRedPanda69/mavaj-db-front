import { Link } from 'react-router-dom';

const PreviewProject = ({project}) => {
    const { projectName, _id, projectClient } = project;
    return (
        <div className='bg-slate-200 shadow mt-6 rounded-lg p-5 font-bold text-zinc-700 border-b flex'>
            <p className='flex-1'>
                {projectName} <span className='text-sm uppercase text-emerald-600 ml-2'>{projectClient}</span>
            </p>
            <Link
            className='text-emerald-700 hover:text-emerald-900 uppercase text-sm font-bold transition-colors'
                to={`${_id}`}
            >See Project</Link>
        </div>
    )
}

export default PreviewProject;