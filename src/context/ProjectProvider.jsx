import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import clientAxios from '../config/clientAxios';

const ProjectsContext = createContext();

const ProjectsProvider = ({children}) => {
    const [projects, setProjects] = useState([]);
    const [alert, setAlert] = useState({});
    const [project, setProject] = useState({});
    const [loading, setLoading] = useState(false);
    const [modalTaskForm, setModalTaskForm] = useState(false);
    const [task, setTask] = useState({});
    const [modalDeleteTask, setModalDeleteTask] = useState(false);
    const [searcher, setSearcher] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const getProjects = async () => {
            try {
                const token = localStorage.getItem('token');
                if(!token) return;
    
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const { data } = await clientAxios('/projects', config);
                setProjects(data);

            } catch (error) {
                console.log(error);
            }
        }
        getProjects();
    }, []);
    

    const showAlert = alert => {
        setAlert(alert);

        setTimeout(() => {
            setAlert({});
        }, 5000);
    }

    const submitProject = async project => {
        (project.id) ? await editProject(project) : await newProject(project);
    }

    const editProject = async project => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clientAxios.put(`/projects/${project.id}`, project, config);
            
            // Sync state 
            const updatedProjects = projects.map(projectState => projectState._id === data._id ? data : projectState);
            setProjects(updatedProjects);
            // Show Alert  
            setAlert({
                msg: 'Project Successfully updated',
                error: false
            });

            setTimeout(() => {
                setAlert({});
                navigate('/projects')
            }, 3000);

            // Redirect


        } catch (error) {
            console.log(error);
        }
    }

    const newProject = async project => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clientAxios.post('/projects', project, config);
            setProjects([...projects, data]);

            setAlert({
                msg: 'Project Successfully created',
                error: false
            });

            setTimeout(() => {
                setAlert({});
                navigate('/projects');
            }, 3000);
            
        } catch (error) {
            console.log(error);
        }
    }

    const getProject = async id => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clientAxios(`/projects/${id}`, config);
            setProject(data);
            
        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false);
        }
    }

    const deleteProject = async id => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clientAxios.delete(`/projects/${id}`, config);

            // Sync state
            const updatedProjects = projects.filter(projectState => projectState._id !== id);
            setProjects(updatedProjects);

            setAlert({
                msg: data.msg,
                error: false
            });

            setTimeout(() => {
                setAlert({});
                navigate('/projects');
            }, 3000);
            
        } catch (error) {
            console.log(error);
        }
    }

    const handleModalTask = () => {
        setModalTaskForm(!modalTaskForm);
        setTask({});
    }

    const submitTask = async task => {
        if(task?.id) {
            await updateTask(task);
        } else {
            await createTask(task);
        }

    }
    
    const createTask = async task => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clientAxios.post('/tasks', task, config);
            console.log(data);

            // Add task to state 
            const updatedProject = {...project};
            updatedProject.projectTasks = [...project.projectTasks, data];

            setProject(updatedProject);
            setAlert({});
            setModalTaskForm(false);

        } catch (error) {
            console.log(error);
        }
    }

    const updateTask = async task => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clientAxios.put(`/tasks/${task.id}`, task, config);

            const updatedProject = {...project};
            updatedProject.projectTasks = updatedProject.projectTasks.map(taskState => taskState._id === data._id ? data : taskState);
            setProject(updatedProject);

            setAlert({});
            setModalTaskForm(false);

        } catch (error) {
            console.log(error);
        }
    }

    const handleEditTaskModal = task => {
        setTask(task);
        setModalTaskForm(true);
    }

    const handleDeleteTaskModal = task => {
        setTask(task);
        setModalDeleteTask(!modalDeleteTask);
    }

    const deleteTask = async () => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clientAxios.delete(`/tasks/${task._id}`, config);
            setAlert({
                msg: data.msg,
                error: false
            });

            const updatedProject = {...project};
            updatedProject.projectTasks = updatedProject.projectTasks.filter(taskState => taskState._id !== task._id);
            setProject(updatedProject);
            setModalDeleteTask(false);
            setTask({});
            setTimeout(() => {
                setAlert({});
            }, 3000);
            
        } catch (error) {
            console.log(error);
        }
    }

    const changeStatusTask = async id => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clientAxios.post(`/tasks/task-status/${id}`, {}, config);
            
            const updatedProject = {...project};
            updatedProject.projectTasks = updatedProject.projectTasks.map(taskState => taskState._id === data._id ? data : taskState);

            setProject(updatedProject);
            setTask({});
            setAlert({});

        } catch (error) {
            console.log(error.response);
        }
    }

    const handleSearcher = () => {
        setSearcher(!searcher);
    }

    return (
        <ProjectsContext.Provider
            value={{
                projects,
                showAlert,
                alert,
                submitProject,
                getProject,
                project,
                loading,
                deleteProject,
                modalTaskForm,
                handleModalTask,
                submitTask,
                handleEditTaskModal,
                task,
                modalDeleteTask,
                handleDeleteTaskModal,
                deleteTask,
                changeStatusTask,
                searcher,
                handleSearcher
            }}
        >
            {children}
        </ProjectsContext.Provider>
    );
}

export {
    ProjectsProvider
}

export default ProjectsContext;