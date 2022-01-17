import React, {useState} from "react";
import { useNavigate } from "react-router-dom";



export default function Signup ({setUser}){

    let navigate = useNavigate();

    const [formData, setData]= useState({
        username: "",
        password: ""
    })
    

    const handleSubmit = (e) => {
        e.preventDefault()
        let params = {
            ...formData 
        }
         fetch('/users', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(r => r.json())
        .then (user => {
            setUser(user)
            navigate("/")
        })
        }
    
    
    

    const handleChange = (e) =>{
        setData(prev => {
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