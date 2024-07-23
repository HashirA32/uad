import React from 'react'

const Faculty = () => {
  return (
    <>
    <div className="Faculty">
      <div className='FacultyHeading'>
        <div className='FacultyMainHeading'>
          <p>FACULTY</p>
        </div>
        <div> 
          <p className='FacultyMainLine'>Our Skilled Faculty <br/>Helps Students in <br/>Many Disciplences</p>
        </div> 
      </div>

      <div className='FacultyD1'>
        <div className='FacultyImage'>
          <img  className='FacultyImage1' src="./images/CS.jpg" alt="img" />
        </div>
        <div className='FacultyDetails'>
          <p className="Faculty__title">Faculty of <br/> Computer Science</p>
          <p className="Faculty__description">Explore BS in Computer Science at Agriculture University of Dera Ismail Khan (UAD). </p>
        </div>
      </div>
      
      <div className='FacultyD2'>
        
        <div className='FacultyDetails'>
          <p className="Faculty__title">Faculty of <br/> Agriculture</p>
          <p className="Faculty__description">Explore BS in Agriculture at Agriculture University of Dera Ismail Khan (UAD). </p>
        </div>
        <div className='FacultyImage'>
          <img  className='FacultyImage1' src="./images/AG1.png" alt="img" />
        </div>
      </div>
      
        
    </div> 
    </>
  )
}

export default Faculty
