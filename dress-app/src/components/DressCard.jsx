import React from "react";
//import {useNavigate} from 'react-router-dom'


export default function DressCard ({dresses, handleDelete}){
    //const navigate = useNavigate()
     

    return (
        <div className="dress">
        <ul>
            <li>
                <h3 id="text">{dresses.name}</h3> 
                <p className="type">Type of material: {dresses.textile}</p>
                <p className="type2">Short description: {dresses.features}</p>
                <p className="type3">Author: {dresses.designer}  <button className="blue" onClick={()=>handleDelete(dresses.id)}>Delete</button></p> 
                                
           </li>
        </ul>
        </div>
    )
}