import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className="hero">
      
      <div className="hero-text">
       Join the <Link to="/" className='hero-text-Link' data-text="UAD" >UAD</Link> Community, where passion <br/>ignites purpose.
       </div>
       <div className="name">
       <a className='hero-text-Link' data-text="University of Agriculture  Dera Ismail Khan " href='/'>University of  Agriculture Dera Ismail Khan </a>
       </div> 
      </div>
    </>
  )
}

export default Hero
