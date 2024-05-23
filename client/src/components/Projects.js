import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./ProjectsStyles.css"
import axios from 'axios'

function Projects(){
    const [projects, setProjects] = useState([])
    useEffect(()=>{
        axios.get("/projects")
        .then(projects=>{setProjects(projects.data)})
        .catch(err=>{console.log(err)})
    },[])


    return (
        <>
        <div className="projects">
        <div className="title">
            {projects.map(project=>{
                return <>
                <h1><Link to={project._id}>{project.projects}</Link></h1>
                <h2>{project.description}</h2>
                </>
            })}
        </div>
        </div>
        </>
    )
}

export default Projects;