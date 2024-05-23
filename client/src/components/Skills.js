import axios from 'axios'
import './SkillsStyles.css'
import { useState, useEffect } from 'react';


function Skills(){
    const [skills, setSkill] = useState([])

    useEffect(()=>{
        axios.get("/skills")
        .then(skills=>{setSkill(skills.data)})
        .catch((err)=>console.log(err))
    },[])
    return (
        <>
        <div className="skills">
            <h1>Skills</h1>
            <ul className="skillslist">
            <h1>
                {
                skills.map(s=>{return <h2>{s.Name}</h2>
                })
                }
            </h1>
            </ul>
        </div>
        
        </>
    )
};

export default Skills;