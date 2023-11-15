import React from 'react'
import headshot from "../assets/adolfo-headshot.jpg"

function Header() {
  return (
    <div>
        <>
        <img src={headshot} height="250px" width="250px" alt="generic"></img>
        <h1>Adolfo Perez-Gascon</h1>
        <h2>Software Engineer</h2>
        </>
    </div>
  )
}

export default Header;