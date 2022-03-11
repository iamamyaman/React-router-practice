import React from "react"
import { Link } from "react-router-dom"
import Home from "../Pages/Home"

export default function Header(){
    return(
        <div class ="header">
            <h1>React Router Tutorial</h1>
            <ul>
                <Link to="" >
                  <li>Home</li>
                </Link>
                <Link to="about">
                  <li>About</li>
                </Link>
                <Link to="profile">
                  <li>Profile</li>
                </Link>
                
            </ul>
        </div>
    )
}