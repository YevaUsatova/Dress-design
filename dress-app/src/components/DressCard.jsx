import React, {useState} from "react";



export default function DressCard ({dresses, handleDelete, handleUpdate}){
   const {textile, features, designer, name, likes} = dresses;
       
    function onUpdate() {
        const newLikes = likes + 1;
        fetch(`/dresses/id`, {
          method: "PATCH",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ likes: newLikes }),
        })
          .then((r) => r.json())
          .then(handleUpdate);
      }
     

    return (
        <div className="dress">
        <ul>
            <li>
                <h3 id="text">{name}</h3> 
                <p className="type">Type of material: {textile}</p>
                <p className="type2">Short description: {features}</p>
                <p className="type3">Author: {designer}  <button className="blue" onClick={()=>handleDelete(dresses.id)}>Delete</button></p> 
                <button className="blue" onClick={onUpdate}>like Me {likes}</button>               
           </li>
        </ul>
        </div>
    )
}