import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/user";
import {useNavigate} from "react-router-dom"

export default function Login (){
    const [formData, setFormData]= useState({
        username: "",
        password: ""
    })
    const naviagate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) =>{
        e.preventDefault()
       await login (dispatch, formData)
       naviagate('/dresses')
    }

    const handleChange = (e) =>{
        setFormData (prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })

    }
    return (
        <div>
           <h2>Login</h2> 
           <form onSubmit = {handleSubmit}>
               <label htmlFor="username">Username</label>
               <input onChange = {handleChange} type= "text" name= "username" id="username" value= {formData.username}/>
               <label htmlFor="password">Password</label>
               <input onChange = {handleChange} type= "password" name= "password" id="password" value= {formData.password}/>
               <button type= "submit">Login</button>
           </form>
        </div>
    )
}