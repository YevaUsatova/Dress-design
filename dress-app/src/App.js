import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Dresses from './containers/Dresses';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NavBar from './containers/NavBar';

function App() {
  return (
    <div >
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dresses/*" element={<Dresses/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
