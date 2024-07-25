import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
       <div className="Nav">
          <Link to="/About">About</Link>
          <Link to="/Admission">Admissions</Link>
          <Link to="/Faculties">Faculties</Link>
          <Link to="/">
          <div className='logo'>
            <img src="./images/UAD_Logo.png" alt="" />
            </div>
          </Link>
          <Link to="/Scholerships">Scholerships</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Links">Results</Link>
          
       </div>
       
    




    </>
  )
}

export default Navbar
