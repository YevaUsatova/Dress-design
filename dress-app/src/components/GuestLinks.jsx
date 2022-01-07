import React from "react";
import { NavLink } from "react-router-dom";

export default function GuestLinks (){
    return (
        <div>
            <li><NavLink to="/login">Login</NavLink> </li>
            <li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink to="/">Home </NavLink> </li>
        </div>
    )
}