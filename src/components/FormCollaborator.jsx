import { useState } from 'react';

import Alert from './Alert';

import useProjects from '../hooks/useProjects';

const FormCollaborator = () => {
    const { showAlert, alert, submitCollaborator } = useProjects();

    const [collaboratorEmail, setCollaboratorEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if(collaboratorEmail === '') {
            showAlert({
                msg: 'You must provide an email',
                error: true
            });
            return;
        }

        submitCollaborator(collaboratorEmail);
    }

    const { msg } = alert;

    return (
        <form
            className='bg-zinc-200 py-10 px-5 md:w-1/2 rounded-lg shadow'
            onSubmit={handleSubmit}
        >
            {msg && <Alert alert={alert} />}
            <div className='mb-5'>
                <label
                    className='text-zinc-700 uppercase font-bold text-sm'
                    htmlFor='collaboratorEmail'
                >
                    Collaborator Email
                </label>
                <input 
                    type='email' 
                    id='collaboratorEmail'
                    className='bg-zinc-300 border-2 w-full p-2 mt-2 placeholder-zinc-500 rounded-md text-zinc-700'
                    placeholder='Enter collaborator´s email Here'
                    autoComplete='off'
                    value={collaboratorEmail}
                    onChange={e => setCollaboratorEmail(e.target.value)}
                />
            </div>

            <input 
                type="submit" 
                value='Search Collaborator'
                className='bg-emerald-700 hover:bg-emerald-700 transition-colors p-3 w-full rounded-lg uppercase font-bold cursor-pointer text-sm'
            />
        </form>
    )
}

export default FormCollaborator