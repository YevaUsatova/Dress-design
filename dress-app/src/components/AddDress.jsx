import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
 

export default function AddDress ({ dress, setDress}){
   
    const [formData, setFormData]= useState({
        name: "",
        textile: "",
        features: "",
        designer: ""
    })
    const navigate = useNavigate()
   
    const handleSubmit = (e) =>{
        e.preventDefault()
        let params = {
          ...formData  
        }
        fetch("/dresses/add", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(resp => resp.json())
        .then(json => {
            setDress([...dress, json])   
            
        })
        navigate('/dresses')
    }

    const handleChange = (e) =>{
        setFormData ( {
              ...formData,
            [e.target.name]: e.target.value    
        })

    }
    return (
        <div >
           <h2>Add another dress to the collection</h2> 
           <div class="row">
           <form class="col s12"  onSubmit = {handleSubmit}>
           <div class="row">
            <div class="input-field col s12">
               <label htmlFor="name">Name of the future dress</label>
               <input onChange = {handleChange} class="validate" type= "text" name= "name" id="name" value= {formData.name}/>
            </div>  
            <div class="input-field col s12">
                
               <label htmlFor="text">Type of textile</label>
               <input  onChange = {handleChange} class="validate" type= "text" name= "textile" id="textile" value= {formData.textile}/>
            </div> 
            <div class="input-field col s12"> 
        
               <label htmlFor="text">Some awesome features</label>
               <input onChange = {handleChange} class="validate" type= "text" name= "features" id="features" value= {formData.features}/>
            </div>
             <div class="input-field col s12">  
                <label htmlFor="text">Who made it</label>
               <input onChange = {handleChange} class="validate" type= "text" name= "designer" id="designer" value= {formData.designer}/>
            </div>
            </div>
           <button class="btn waves-effect waves-light" type= "submit">Add</button>
           </form >
        </div>
        </div>
    )
}
