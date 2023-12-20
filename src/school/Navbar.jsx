import React from 'react'
import './Coding.css'

const Navbar = () => {
  return (
    <div>
        {/* <div className='coding'>
          <nav>
        <ul style={{display:'flex', justifyContent:'space-evenly'}}>
          <div>TEEGREAT CODING SCHOOL</div>
            <li>About</li>
            <li>Contact</li>
            <li>signup</li>
        </ul>
        </nav>

        </div> */}

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" id='nav'>
    <a className="navbar-brand" href="#">TEEGREAT'S CODING SCHOOL</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item px-5">
          <a className="nav-link" href="#" id='dist'></a>
        </li>
        <li className="nav-item px-5">
          <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
        </li>
        <li className="nav-item px-5">
          <a className="nav-link" href="#">SIGNUP</a>
        </li>
        <li className="nav-item px-5">
          <a className="nav-link" href="#">PROFILE</a>
        </li>
        <li className="nav-item px-5">
          <a className="nav-link disabled" aria-disabled="true">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar