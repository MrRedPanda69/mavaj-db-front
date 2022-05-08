import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import FormCollaborator from '../components/FormCollaborator';

import useProjects from '../hooks/useProjects';

const NewCollaborator = () => {
    const { getProject, project, loading } = useProjects();
    const params = useParams();

    useEffect(() => {
        getProject(params.id);
    }, [])
    
    return loading ? (
        <div className='border border-emerald-900 shadow rounded-md p-4 max-w-sm w-full mx-auto'>
            <div className='animate-pulse flex space-x-4'>
                <div className='rounded-full bg-slate-500 h-10 w-10'></div>
                <div className='flex-1 space-y-6 py-1'>
                    <div className='h-2 bg-slate-500 rounded'></div>
                    <div className='space-y-3'>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='h-2 bg-slate-500 rounded col-span-2'></div>
                            <div className='h-2 bg-slate-500 rounded col-span-1'></div>
                        </div>
                        <div className='h-2 bg-slate-500 rounded'></div>
                    </div>
                </div>
            </div>
        </div>
    ): (
        <>
            <h1 className='text-4xl font-bold flex gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
                Add Collaborator to Project: <span className='ml-1 text-emerald-700'>{project.projectName}</span>
            </h1>

            <div className='mt-10 flex justify-center'>
                <FormCollaborator />
            </div>        
        </>
    )
}

export default NewCollaborator;