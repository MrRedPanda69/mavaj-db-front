
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
                    : <p className='text-center text-zinc-600 uppercase'>No projects</p>
                }
            </div>
        </>
    )
}

export default Projects;