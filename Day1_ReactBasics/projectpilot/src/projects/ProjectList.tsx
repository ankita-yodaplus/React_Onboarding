import { Project } from './Project';
import  ProjectCard  from './ProjectCard';

interface ProjectListProps{
    projects :Project[];

}

function ProjectList({projects} :ProjectListProps){
    const handleEdit = (project : Project) =>{
        console.log(project);
    }

    const items = projects.map(project =>(
    <div key={project.id} className="col-sm">
        <ProjectCard 
        project={project}
        onEdit={handleEdit}
        />
    </div>
))


return <div className="row"> {items} </div>;

}
export default ProjectList