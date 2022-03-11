import React from "react";
import Header from "./components/Header"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import NotFound from "./Pages/NotFound"
import "./App.css"
import { 
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";


export default function App(){
    return(
        <Router>
            <div className="App">
             <Header/>
            <Routes>
                <Route path ="/" element = {<Home/>}/>
                <Route path ="/about" element = {<About/>} />
                <Route path ="/profile" element = {<Profile/>} />
                <Route path ="*" element = {<NotFound/>} />
            </Routes>
            </div>
        </Router>
    )
}

