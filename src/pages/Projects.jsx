
import PreviewProject from '../components/PreviewProject';
import useProjects from '../hooks/useProjects';

const Projects = () => {
    const { projects } = useProjects();

    return (
        <>
            <h1 className='text-4xl font-black text-zinc-800'>Projects</h1>

            <div>
                {
                    projects.length 
                    ? projects.map(project => (
                        <PreviewProject 
                            key={project._id}
                            project={project}
                        />
                    ))     
                    : <p className='bg-zinc-200 mt-10 rounded-lg text-zinc-700 text-center my-5 p-5 text-2xl font-bold'>No projects here, click on <span className='text-emerald-600'>New Project</span> to create a new one!</p>
                }
            </div>
        </>
    )
}

export default Projects;