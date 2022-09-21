import "./register.css"
 import React from 'react'
import { useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

 const Register = () => {
   const [data,setData] = useState({
    username:"",
    email:"",
    password:""})

    const [error,setError] = useState("")
    const navigate = useNavigate();

    const handleChange = ({currentTarget: input}) => {
    setData({...data,[input.name]:input.value})}

   
    const handleSubmit = async(e) => {
   e.preventDefault()
   try{
    const url = "http://localhost:5000/api/users";
    await axios.post(url,data)
    navigate("/login")
   }catch(error){
     if(error.response && 
        error.response.status >= 400 &&
        error.response.status <=500
        ){
            setError(error.response.data.message)
        }}}

   return (
     <div className="register-container">
     <div className="register-form">
        <div className="top">
            <h1>Welcome Back!</h1>
            <Link to="/login" >
                <button type="button" className="button">
                    Sign In
                </button>
            </Link>
        </div>
        <div className="bottom">
        <form className="register-form-container" onSubmit={handleSubmit}>
         <h1>Create Account</h1>
         <input type= 'text'
         placeholder="User-Name"
         name='username'
         onChange={handleChange}
         value={data.username}
         required
         className="input"/>
         <input type= 'email'
         placeholder="Email"
         name='email'
         onChange={handleChange}
         value={data.email}
         required
         className="input"/>
         <input type= 'password'
         placeholder="Password"
         name='password'
         onChange={handleChange}
         value={data.password}
         required
         className="input"/>

         {error&&<div className="error-msg">{error}</div>}

         <button type="submit" className="button">Sign Up</button>
        </form>
        </div>
     </div>
     </div>
   )
 }
 
 export default Register