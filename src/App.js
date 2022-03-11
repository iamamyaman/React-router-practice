import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "./components/Header"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import NotFound from "./Pages/NotFound"
import Post from "./Pages/Post";
import "./App.css"
import { 
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";


export default function App(){
    const[login,setLogin] = useState(false);
    console.log(login);
    return(
        <Router>
            <div className="App">
             <Header/>
             <button onClick={()=>setLogin(!login)}>{login ? "LOGOUT" : "LOGIN"}</button>
            <Routes>
                <Route path ="/" element = {<Home/>}/>
                <Route path ="/about" element = {<About/>} />
                <Route 
                  path ="/profile" 
                  element ={<Profile login ={login} />}
                />
                <Route path ="/post/:id" element = {<Post/>} />
                <Route path ="*" element = {<NotFound/>} />
                
            </Routes>
            </div>
        </Router>
    )
}

