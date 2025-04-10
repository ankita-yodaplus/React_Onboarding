import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
import { Project } from "./Project";





function ProjectPage(){

    const saveProject = (project :Project) =>{
        console.log('save project',project)
    }

    return (
       <>
       <h1>Projects</h1>
       {/* <pre>{JSON.stringify(MOCK_PROJECTS,null,' ')}</pre> */}
       <ProjectList 
       onSave={saveProject}
       projects={MOCK_PROJECTS} />
       </> 
    )
}
export default ProjectPage;