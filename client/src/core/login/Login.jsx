import "./login.css"
 import React from 'react'
import { useState } from "react"
import {Link} from 'react-router-dom'
import axios from 'axios';

 const Login = () => {
    const [data,setData] = useState({
        userName:"",
        password:""})
        
        const [error,setError] = useState("")

        const handleChange = ({currentTarget: input}) => {
        setData({...data,[input.name]:input.value})}

        const handleSubmit = async(e) => {
       e.preventDefault()
       try{
        const url = "http://localhost:5000/api/auth";
        const {data:res} = await axios.post(url,data)
        localStorage.setItem("token",res.data)
        window.location = "/"
        
       }catch(error){
         if(error.response && 
            error.response.status >= 400 &&
            error.response.status <=500
            ){
                setError(error.response.data.message)
            }}}
    
       return (
         <div className="login-container">
         <div className="login-form">
            <div className="top">
            <form className="login-form-container" onSubmit={handleSubmit}>
             <h1>Log in</h1>
             <input type= 'text'
             placeholder="UserName"
             name='userName'
             onChange={handleChange}
             value={data.userName}
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
    
             <button type="submit" className="button">Sign In</button>
            </form>
            </div>
                <Link to="/register" >
                    <button className="reg-btn" >
                        New Here?
                    </button>
                </Link>
         </div>
         </div>
       )
     }
    
    export default Login
    //     const [users, setUsers] = useState([])
    // const getUsers = () => {
    //     axios
    //     .get('/api/users')
    //     .then((res) => {})
    // }