import React from "react";

export default function DressCard ({dresses, handleDelete, handleUpdate}){
   const {textile, features, designer, name, id, likes} = dresses;
  
  function handleClick(id) {
    
      fetch(`dresses/${id}/like`,{
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify() 
      })
      .then ((r)=> r.json())
      .then (handleUpdate)
  }

    return (
        <div className="dress">
        <ul>
            <li>
                <h3 id="text">{name}</h3> 
                <p className="type">Type of material: {textile}  <button className="blue" onClick={()=> handleClick(id)}>Like me {likes}</button></p>
                <p className="type2">Short description: {features}</p>
                <p className="type3">Author: {designer}  <button className="blue" onClick={()=>handleDelete(id)}>Delete</button></p> 
                      
                         
           </li>
        </ul>
        </div>
    )
}