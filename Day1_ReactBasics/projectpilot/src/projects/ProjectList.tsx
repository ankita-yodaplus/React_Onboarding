import { Project } from './Project';
import  ProjectCard  from './ProjectCard';
import { useState } from 'react';
import ProjectForm from './ProjectForm';

interface ProjectListProps{
    projects :Project[];
    onSave : (project :Project) => void;
}

function ProjectList({ projects, onSave } :ProjectListProps){

    const [projectBeingEdited, setProgectBeingEdited ]= useState({});

    const handleEdit = (project : Project) =>{
        // console.log(project);
        setProgectBeingEdited(project);
    };

    const cancelEditing = () =>{
        setProgectBeingEdited({});
    };

   return (<div className="row">
    {projects.map(project =>(
    <div key={project.id} className="col-sm">
        {project === projectBeingEdited ?(
            <ProjectForm  
            onSave={onSave}
            onCancel={cancelEditing}/>
        ) :( 
        <ProjectCard  project={project} onEdit={handleEdit}  />
        ) }  
    </div>
  )) }
   </div>
  );

}
export default ProjectList