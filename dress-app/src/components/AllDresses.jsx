import React from "react";
import {NavLink} from 'react-router-dom'
export default function AllDresses ({dresses}){
    return (
        <div>
           <NavLink to = {`/dresses/${dresses.id}`}><h1>{dresses.name}</h1></NavLink>
        </div>
    )
}