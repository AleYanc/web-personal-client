import React, {useState, useEffect} from 'react';
import {getProjectsApi} from '../../../api/projects';
import ListProjects from '../../../components/admin/Projects/ListProjects';

const Projects = () => {
    
    const [projects, setProjects] = useState([]);
    
    const [reloadProjects, setReloadProjects] = useState(false);

    useEffect(() => {
        getProjectsApi().then(response => {
            setProjects(response.projects);
        })
        setReloadProjects(false);
    }, [reloadProjects])

    return ( 
        <div className="projects">
            <ListProjects getProjects={projects} setReloadProjects={setReloadProjects}/>
        </div>
    );
}
 
export default Projects;