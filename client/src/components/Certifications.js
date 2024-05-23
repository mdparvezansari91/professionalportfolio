import axios from "axios";
import { useState, useEffect } from 'react';

function Certification(){
    const [certifications, setSkill] = useState([])
    useEffect(()=>{
        axios.get("/certifications")
        .then(certifications=>{setSkill(certifications.data)})
        .catch((err)=>console.log(err))
    },[])
    return (
        <>
       
        <div className="skills">
            <h1>Certifications</h1>
            <ul className="skillslist">
            {
                certifications.map(s=>{
                return <> 
                <h2><a href={s.Url}>{s.Course_Name}</a><br /><span>Institute Name - {s.Institute}</span></h2>
                <h3><a href={s.certificateURL}>Certificate</a></h3><br />
                
                
                </>
                })
                }
            
            </ul>
        </div>

        </>
    )
}

export default Certification;