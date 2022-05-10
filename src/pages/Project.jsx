import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import useProjects from '../hooks/useProjects';

import ModalDeleteTask from '../components/ModalDeleteTask';
import ModalTaskForm from '../components/ModalTaskForm';

import Alert from '../components/Alert';
import Task from '../components/Task';

const Project = () => {
    const params = useParams();
    const { getProject, project, loading, handleModalTask, alert } = useProjects();

    useEffect(() => {
        getProject(params.id);
    }, []);
    
    const { projectName } = project;

    const { msg } = alert;

    return (
        loading 
        ? (
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
        : (
            <>
                <div className='flex justify-between'>
                    <h1 className='text-zinc-700 font-black text-4xl'>{projectName}</h1>

                    <div className='flex items-center gap-2 text-zinc-200 hover:text-zinc-700 transition-colors'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-8 w-8" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                        >
                            <path 
                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" 
                            />
                        </svg>
                        <Link
                            to={`/projects/edit/${params.id}`}
                            className='text-xl font-bold uppercase'
                        >Edit Project</Link>
                    </div>
                </div>

                <button
                onClick={handleModalTask}
                    type='button'
                    className='text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold bg-emerald-700 text-center mt-3 flex justify-center gap-2 items-center'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    New Task
                </button>

                <p className="font-bold text-2xl mt-10 text-zinc-700 flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-zinc-200" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    Project's Tasks
                </p>

                <div className="flex justify-center">
                    <div className='w-full md:w-1/3 lg:w-1/4'>
                        {msg && <Alert alert={alert} />}
                    </div>
                </div>

                <div className="bg-zinc-200 mt-10 rounded-lg text-zinc-700">
                    { project.projectTasks?.length 
                        ? project.projectTasks?.map(projectTasks => 
                            <Task 
                                key={projectTasks._id} 
                                projectTasks={projectTasks}
                            /> 
                        )                        
                        : <p className='text-center my-5 p-5 text-2xl font-bold'>There are no tasks in this project</p>
                    }
                </div>

                {/* <div className='flex items-center justify-between mt-10'>
                    <p className="font-bold text-2xl flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                        Collaborators
                    </p>
                    <Link
                        to={`/projects/new-collaborator/${project._id}`}
                        className='flex justify-center gap-2 items-center uppercase font-bold text-xl text-zinc-200 hover:text-zinc-700 transition-colors'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                        </svg>
                        Add Collaborator 
                    </Link>
                </div> */}

                <ModalTaskForm />
                <ModalDeleteTask />
            </>
        )
    );
}

export default Project;