import React from "react";

export default function DressCard ({dresses}){
    return (
        <ul>
            <li>
                <h3>{dresses.name}</h3> 
                <h3>{dresses.textile}</h3>
                <p>{dresses.features}</p>
                <h3>{dresses.designer}</h3>
           </li>
        </ul>
    )
}