import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React, {useState} from "react"
import Home from './containers/Home';
import Dresses from './containers/Dresses';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NavBar from './containers/NavBar';
import AddDress from './components/AddDress';


function App() {
  const [user, setUser] = useState({})
  return (
    <div >
      <Router>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home user={user}/>}/>
          <Route path="/dresses" element={<Dresses user={user}/>}/>
          <Route path="/login" element={<Login setUser={setUser}/>}/>
          <Route path="/signup" element={<Signup setUser={setUser}/>}/>
          <Route path="/dresses/add" element={<AddDress/>}/>
          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
