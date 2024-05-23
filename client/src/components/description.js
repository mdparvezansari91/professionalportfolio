import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Descriptions(){
    const [descriptions, setDescriptions] = useState([])
    useEffect(()=>{
        axios.get('/projects/:id')
        .then(descriptions=>{setDescriptions(descriptions.data)})
        .catch(err=>{console.log(err)})
    },[])


    return (
        <>
        <div className="Description">
        <div className="title">
            
            {descriptions.map(des=>{
                return <>
                <h1>{des.description}</h1>

                
                </>
            })}
        </div>
        </div>
        </>
    )
}

export default Descriptions;