import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className="hero">
      
      <div className="hero-text">
       Join the <Link to="/" className='hero-text-Link' >UAD</Link> Community, where passion ignites purpose.
       </div>
       <div className="name">
       <a className='hero-text-Link' href='/'>University of  Agriculture<br/>Dera Ismail Khan </a>
       </div> 
      </div>
    </>
  )
}

export default Hero
