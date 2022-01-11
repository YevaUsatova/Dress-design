import React, {useState} from "react";
import {useNavigate} from "react-router-dom"

export default function Login ({setUser}){
    const [formData, setFormData]= useState({
        username: "",
        password: ""
    })
    let navigate = useNavigate()
   
    const handleSubmit = async (e) =>{
        e.preventDefault()
        let params = {
          ...formData  
        }
        fetch("/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(resp => resp.json())
        .then(json => {
            setUser(json)
            navigate(`/dresses`)
        })
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
        <div >
           <h2>Login</h2> 
           <form  onSubmit = {handleSubmit}>
               <label htmlFor="username">Username</label>
               <input onChange = {handleChange} type= "text" name= "username" id="username" value= {formData.username}/>
               <label htmlFor="password">Password</label>
               <input onChange = {handleChange} type= "password" name= "password" id="password" value= {formData.password}/>
               <button type= "submit">Login</button>
           </form >
        </div>
    )
}