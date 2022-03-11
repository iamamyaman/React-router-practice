import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Profile({login}){
    const navigate = useNavigate();
    useEffect(()=>{
        if(!login){
            navigate("/");
        }

    },[login,navigate])
    return(
        <h1>Profile Page</h1>
    )
}