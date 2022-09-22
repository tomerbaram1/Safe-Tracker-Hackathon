import "./main.css"

import {Link} from 'react-router-dom'


import React from 'react'

const Main = () => {

const handleLogout = () =>{
    localStorage.removeItem("token");
    window.location.reload()
}

    return (
    <div className="main-container">

      <div className="general">

        <h1>Safe Tracker</h1>
        <button className="log-out-btn" onClick={handleLogout}>
            Logout
        </button>

      </div>
      <div className="who">
        <h1>Who are you?</h1>
        <Link to = "/parent"><button className="who-btn">Parent</button></Link>
        <Link to = "/child"><button className="who-btn">Child</button></Link>

      </div>
    </div>
  )
}

export default Main