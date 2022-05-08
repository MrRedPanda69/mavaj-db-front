import { formatDate } from '../helpers/FormatDate';
import useProjects from '../hooks/useProjects';

const Task = ({projectTasks}) => {
    const { handleEditTaskModal, handleDeleteTaskModal } = useProjects();

    const { taskName, taskPriority, taskDescription, deliveryDate, _id, taskStatus} = projectTasks;

    return (
        <div className='p-5 flex justify-between items-center shadow'>
            <div>
                <p className='mb-2 text-xl'>{taskName}</p>
                <p className='mb-2 text-sm text-zinc-500 uppercase'>{taskDescription}</p>
                <p className='mb-2 text-sm'>{formatDate(deliveryDate)}</p>
                <p className='mb-2 text-zinc-600'>{taskPriority}</p>
            </div>

            <div className='flex gap-3'>
                <button
                    className='bg-purple-500 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg flex gap-1 items-center'
                    onClick={() => handleEditTaskModal(projectTasks)}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                    >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    Edit Task
                </button>

                {taskStatus ?(
                    <button
                        className='bg-emerald-500 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg flex gap-1 items-center'
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                        >
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Complete
                    </button>
                ) :(
                    <button
                        className='bg-zinc-500 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg flex gap-1 items-center'
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                        >
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                        Incomplete
                    </button>
                )}
                
                <button
                    className='bg-red-500 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg flex gap-1 items-center'
                    onClick={() => handleDeleteTaskModal(projectTasks)}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                    >
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Delete Task
                </button>
            </div>
        </div>
    )
}

export default Task;