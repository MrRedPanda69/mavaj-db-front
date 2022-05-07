import { useState } from 'react';

import useProjects from '../hooks/useProjects';
import Alert from './Alert';

const FormProject = () => {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [projectClient, setProjectClient] = useState('');

    const { showAlert, alert, submitProject } = useProjects();

    const handleSubmit = e => {
        e.preventDefault();

        if([projectName, projectDescription, deliveryDate, projectClient].includes('')) {
            showAlert({
                msg: 'All fields are required',
                error: true
            });
            return;
        }

        // Pass data to provider
        submitProject({projectName, projectDescription, deliveryDate, projectClient});
    }

    const { msg } = alert;

    return (
        <form 
            className='bg-zinc-200 py-10 px-5 md:w-1/2 rounded-lg'
            onSubmit={handleSubmit}
        >
            {msg && <Alert alert={alert} />}
            <div className='mb-3 text-zinc-700'>
                <label
                    className='text-zinc-700 uppercase font-bold text-sm'
                    htmlFor='projectName'
                >Project name</label>
                <input 
                    id='projectName'
                    type='text' 
                    className='border w-full p-2 mt-2 placeholder-zinc-500 rounded-md bg-zinc-100'
                    placeholder='Name for this Project'
                    value={projectName}
                    onChange={e => setProjectName(e.target.value)}
                />
            </div>
            
            <div className='mb-3 text-zinc-700'>
                <label
                    className='text-zinc-700 uppercase font-bold text-sm'
                    htmlFor='projectDescription'
                >Project Description</label>
                <textarea 
                    id='projectDescription'
                    className='border w-full p-2 mt-2 placeholder-zinc-500 rounded-md bg-zinc-100'
                    placeholder='Short description about this Project'
                    value={projectDescription}
                    onChange={e => setProjectDescription(e.target.value)}
                />
            </div>

            <div className='mb-3 text-zinc-700'>
                <label
                    className='text-zinc-700 uppercase font-bold text-sm'
                    htmlFor='deliveryDate'
                >Delivery Date</label>
                <input 
                    id='deliveryDate'
                    type='date' 
                    className='text-zinc-700 border w-full p-2 mt-2 placeholder-zinc-500 rounded-md bg-zinc-100'
                    value={deliveryDate}
                    onChange={e => setDeliveryDate(e.target.value)}
                />
            </div>

            <div className='mb-3 text-zinc-700'>
                <label
                    className='text-zinc-700 uppercase font-bold text-sm'
                    htmlFor='projectClient'
                >Project's Client</label>
                <input 
                    id='projectClient'
                    type='text' 
                    className='border w-full p-2 mt-2 placeholder-zinc-500 rounded-md bg-zinc-100'
                    placeholder='Client for this Project'
                    value={projectClient}
                    onChange={e => setProjectClient(e.target.value)}
                />
            </div>

            <input 
                type='submit' 
                value='Create Project'
                className='bg-gradient-to-br bg-emerald-700 w-full p-3 rounded-md font-bold hover:bg-emerald-900 transition-colors cursor-pointer'
            />
        </form>
    )
}

export default FormProject;