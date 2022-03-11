import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils"
import React from "react"
import { Link } from "react-router-dom"
import "./App.css"


export default function Navbar(){
    const navStyle ={
        color:'white',
        textDecoration:"none"
    };

    return(
        <div className="nav-bar">
            <h1>LOGO</h1>
            <ul className="nav-links">
                <Link to = "/about" style={navStyle}>
                  <li>About</li>
                </Link>
                <Link to ="/services" style={navStyle}>
                  <li>Services</li>
                </Link>
            </ul>
        </div>
    )
}
