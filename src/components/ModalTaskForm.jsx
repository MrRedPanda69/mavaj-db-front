import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useParams } from 'react-router-dom';

import Alert from './Alert';

import useProjects from '../hooks/useProjects';

    const PRIORITY = ['Low', 'Medium', 'High'];

const ModalTaskForm = () => {
    const { modalTaskForm, handleModalTask, showAlert, alert, submitTask } = useProjects();

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskPriority, setTaskPriority] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');

    const params = useParams();

    const handleSubmit = e => {
        e.preventDefault();

        if([taskName, taskDescription, taskPriority, deliveryDate].includes('')) {
            showAlert({
                msg: 'All fields are required',
                error: true
            });

            return;
        }
        submitTask({taskName, taskDescription, taskPriority, deliveryDate, belongsToProject: params.id});
    }

    const { msg } = alert;

    return (
        <Transition.Root show={modalTaskForm} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={handleModalTask}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay 
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
                        />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                            <div className="inline-block align-bottom bg-zinc-100 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">

                            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                                <button
                                    type="button"
                                    className="bg-zinc-100 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                                    onClick={handleModalTask}
                                >
                                <span className="sr-only">Close</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>


                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                    {msg && <Alert alert={alert} />}
                                    <Dialog.Title as="h3" className="text-4xl capitalize leading-6 font-bold text-zinc-900">
                                        Create new task
                                    </Dialog.Title>
                                    <form 
                                        className='my-10'
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="mb-5">
                                            <label
                                                className='text-zinc-700 uppercase font-bold text-sm'
                                                htmlFor='taskName'
                                            >
                                                Task Name
                                            </label>
                                            <input 
                                                type="text" 
                                                id='taskName'
                                                className='bg-zinc-300 border-2 w-full p-2 mt-2 placeholder-zinc-500 rounded-md text-zinc-700'
                                                placeholder='Enter task Name Here'
                                                autoComplete='off'
                                                value={taskName}
                                                onChange={e => setTaskName(e.target.value)}
                                            />
                                        </div>

                                        <div className="mb-5">
                                            <label
                                                className='text-zinc-700 uppercase font-bold text-sm'
                                                htmlFor='taskDescription'
                                            >
                                                Task Description
                                            </label>
                                            <textarea 
                                                id='taskDescription'
                                                className='bg-zinc-300  border-2 w-full p-2 mt-2 placeholder-zinc-500 rounded-md text-zinc-700'
                                                placeholder='Short description for this task'
                                                autoComplete='off'
                                                value={taskDescription}
                                                onChange={e => setTaskDescription(e.target.value)}
                                            />
                                        </div>

                                        <div className="mb-5">
                                            <label
                                                className='text-zinc-700 uppercase font-bold text-sm'
                                                htmlFor='deliveryDate'
                                            >
                                                Delivery Date
                                            </label>
                                            <input 
                                                type="date" 
                                                id='deliveryDate'
                                                className='bg-zinc-300  border-2 w-full p-2 mt-2 placeholder-zinc-500 rounded-md text-zinc-700'
                                                autoComplete='off'
                                                value={deliveryDate}
                                                onChange={e => setDeliveryDate(e.target.value)}
                                            />
                                        </div>

                                        <div className="mb-5">
                                            <label
                                                className='text-zinc-700 uppercase font-bold text-sm'
                                                htmlFor='taskDescription'
                                            >
                                                Task Priority
                                            </label>
                                            <select 
                                                name="" 
                                                id='taskPriority'
                                                className='bg-zinc-300  border-2 w-full p-2 mt-2 placeholder-zinc-500 rounded-md text-zinc-700'
                                                value={taskPriority}
                                                onChange={e => setTaskPriority(e.target.value)}
                                            >
                                                <option>--Select--</option>
                                                {PRIORITY.map(opt => (
                                                    <option key={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <input 
                                            type="submit" 
                                            value="Create task" 
                                            className='bg-emerald-700 hover:bg-emerald-700 transition-colors p-3 w-full rounded-lg uppercase font-bold cursor-pointer text-sm'
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ModalTaskForm;