import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import FormProject from '../components/FormProject';

import useProjects from '../hooks/useProjects';


const EditProject = () => {
    const params = useParams();
    const { getProject, project, loading } = useProjects();

    useEffect(() => {
        getProject(params.id);
    }, []);
    
    const { projectName } = project;
    if(loading) return(
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
    )

    return (
        <>
            <div className='flex justify-between'>
                <h1 className='font-black text-4xl text-zinc-700'>Edit Project: {projectName}</h1>

                <div className='flex items-center gap-2 text-zinc-200 hover:text-zinc-700 transition-colors'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" 
                            clipRule="evenodd" 
                        />
                    </svg>
                    <button
                        className='text-xl font-bold uppercase'
                    >Delete</button>
                </div>
            </div>

            <div className='mt-10 flex justify-center'>
                <FormProject />
            </div>
        </>
    )
}

export default EditProject;