import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { signup } from "../actions/user";
import {useNavigate} from "react-router-dom"

export default function Signup (){
    const [formData, setFormData]= useState({
        username: "",
        password: ""
    })
    const naviagate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) =>{
        e.preventDefault()
       await signup (dispatch, formData)
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
           <h2>Sign up</h2> 
           <form onSubmit = {handleSubmit}>
               <label htmlFor="username">Username</label>
               <input onChange = {handleChange} type= "text" name= "username" id="username" value= {formData.username}/>
               <label htmlFor="password">Password</label>
               <input onChange = {handleChange} type= "password" name= "password" id="password" value= {formData.password}/>
               <button type= "submit">Signup</button>
           </form>
        </div>
    )
}