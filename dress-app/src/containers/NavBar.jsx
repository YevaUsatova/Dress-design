import React from "react";
import GuestLinks from "../components/GuestLinks";
import UserLinks from "../components/UserLinks";
import { useSelector } from "react-redux";
 

export default function NavBar (){
    
const {loggedIn}= useSelector(({usersReducer}) => usersReducer)

    return (
    <nav className="blue">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Create your dress</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
              {loggedIn ? <UserLinks/> : <GuestLinks/>}
         </ul>
        </div>
     </nav>        
    )
}