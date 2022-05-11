import { formatDate } from '../helpers/FormatDate';
import useProjects from '../hooks/useProjects';

const Task = ({projectTasks}) => {
    const { handleEditTaskModal, handleDeleteTaskModal, changeStatusTask } = useProjects();

    const { taskName, taskPriority, taskDescription, deliveryDate, _id, taskStatus} = projectTasks;

    return (
        <div className='p-5 flex justify-between items-center shadow'>
            <div>
                <p className='mb-2 text-xl'>{taskName}</p>
                <p className='mb-2 text-sm text-zinc-500 uppercase'>{taskDescription}</p>
                <p className='mb-2 text-sm'>{formatDate(deliveryDate)}</p>
                <p className='mb-2 text-zinc-600'>{taskPriority}</p>
            </div>

            <div className='flex flex-col lg:flex-row gap-3'>
                <button
                    className='bg-purple-500 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg flex gap-1 items-center'
                    onClick={() => handleEditTaskModal(projectTasks)}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                    >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    Edit Task
                </button>
                
                <button
                        className={`${taskStatus ? 'bg-emerald-500' : 'bg-zinc-500'} px-4 py-3 text-white uppercase font-bold text-sm rounded-lg flex gap-1 items-center`}
                        onClick={() => changeStatusTask(_id)}
                    >
                        {taskStatus ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        )}
                        {taskStatus ? 'Complete' : 'Incomplete'}
                    </button>
                
                <button
                    className='bg-red-500 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg flex gap-1 items-center'
                    onClick={() => handleDeleteTaskModal(projectTasks)}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
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