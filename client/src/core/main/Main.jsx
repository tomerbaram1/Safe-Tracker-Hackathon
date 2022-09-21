import "./main.css"


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
    </div>
  )
}

export default Main