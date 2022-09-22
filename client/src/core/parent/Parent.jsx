import "./parent.css"
import React from 'react'
import { useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const ParentApp = (props) => {

    const [data,setData] = useState({
        phone:"",
        childname:"",
        location: ""
        
    })
    const [error,setError] = useState("")


    const handleChange = ({currentTarget: input}) => {
        setData({...data,[input.name]:input.value})}
    
        const handleSubmit = async(e) => {
            e.preventDefault()
            try{
             const url = "http://localhost:5000/api/users/:id";
              await axios.put(url,data)
            }catch(error){
              if(error.response && 
                 error.response.status >= 400 &&
                 error.response.status <=500
                 ){
                     setError(error.response.data.message)
                 }}}

    return(
        <div className="main-parent">
             <form className="child-form-container" onSubmit={handleSubmit}>
             <input type= 'text'
            placeholder="Child Number"
            name='phone'
            onChange={handleChange}
            value={data.phone}
            required
            className="input"/>

            <input type= 'text'
            placeholder="Child name"
            name='childname'
            onChange={handleChange}
            value={data.childname}
            required
            className="input"/>  
            <button 
            type="submit" className="button"> Add a child</button>
             </form>


            <h1 className="where">Where is {data.childname} ?</h1>
            <div className="card">
            <h2>Current Location</h2>
            <br />
            <h1 className="location">{ data.location ? data.location: "Loading..."}</h1>
            <br />
            <p className="last-seen">{data.location ? "Last seen 10m ago" : "Loading..."}</p>
            </div>

        </div>
    )
} 

export default ParentApp