import React from 'react'

const Admission = () => {
  return (
    <>
      <div className='FormMain'>
        <form className="form">
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
            <div className="flex">
                <label>
                    <input className="input" type="text" placeholder="" required=""/>
                    <span>Firstname</span>
                </label>

                <label>
                    <input className="input" type="text" placeholder="" required=""/>
                    <span>Lastname</span>
                </label>
            </div>  

            <p className='Placeholder'>Gender</p>    
            <select className='select1'>
                
                  <option value="text">BS Computer Science</option>
                  <option value="text">BSc Agricuture</option>
                  <option value="text">BS Bio Chemistry</option>
                  <option value="text">BS Chemistry</option>
                  <option value="text">BS English</option>
                  <option value="text">BS Enviromental Sciences</option>
                  <option value="text">BS Forestory</option>
                  <option value="text">BS Athimatics</option>
                  <option value="text">BS Dental Technology</option>
                  <option value="text">BS Radiology Technology</option>
                  <option value="text">BS Zoology</option>


            </select> 
            
            <label>
                <input className="input" type="Text" placeholder="" required=""/>
                <span>CNIC</span>
            </label>
            <p className='Placeholder'>Gender</p>
            <select  className='select1' placeholder= "Gender">
                <p>Gender</p>
                <option>Male</option>
                <option>Female</option>
            </select>
            <button className="submit">Submit</button>
          
        </form>
      </div>
  </>
  )
}

export default Admission
