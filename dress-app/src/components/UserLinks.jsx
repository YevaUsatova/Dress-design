import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { logout } from "../actions/user";

export default function UserLinks (){
    const dispatch = useDispatch()
    const nav = useNavigate()
    return (
    <div>   
        <li><NavLink to="/dresses">Dresses </NavLink></li>
        <li><a onClick = {async (e)=> {
            e.preventDefault()
            await logout(dispatch)
            nav('/')
        }}href="/logout">Logout </a></li>
    </div>
    )
}