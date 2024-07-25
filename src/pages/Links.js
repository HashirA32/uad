import React,{useEffect} from 'react'

const Links = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const sections = document.querySelectorAll('.Result');

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);



  return (
    <>
        <div className="Result">
          <div className='Result-H'>Results</div>
          <div className='Result-D'> Currently no result available</div>
         
        </div>
    </>
  )
}

export default 
Links