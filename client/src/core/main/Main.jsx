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
      <nav className="navbar">

        <h1>Safe Tracker</h1>
        <button className="button" onClick={handleLogout}>
            Logout
        </button>
      </nav>
      <div>
        <h1>Are you the parent or the child?</h1>
       <Link to = "/Parent"> <button>Parent</button></Link>
       <Link to = "/Child"> <button>Child</button></Link>
      </div>
    </div>
  )
}

export default Main