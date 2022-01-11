import React from "react";
import { NavLink, useNavigate } from "react-router-dom";


export default function NavBar ({user, setUser}){
const navigate =useNavigate()    
    return (
    <nav className="blue">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Dress 101</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          {!!user.id ? 
            <div>
                <li><NavLink to='/dresses'>Dresses world</NavLink></li>
                <li><a href="/delete" onClick={(e) => {
                    e.preventDefault()
                    fetch('/logout', {
                        method: "DELETE",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        }
                    }).then(resp => {
                        setUser({})
                        navigate("/")
                    })
                }}>Logout</a></li>
                <li><NavLink to='/dresses/add' >Add Dresses</NavLink></li>
            </div>
            :
            <div>
                <li><NavLink to="/signup" >Signup</NavLink></li>
                <li ><NavLink to="/login" >Login</NavLink></li>
                
            </div>
           
            }
         </ul>
        </div>
     </nav>        
    )
}