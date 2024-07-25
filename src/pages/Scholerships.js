import React,{useEffect} from 'react'

const Scholerships = () => {

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

    const sections = document.querySelectorAll('.Scholership');

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
     <div className="Scholership">
        <div className='Scholership-H'>SCHOLARSHIPS</div>

        <div className='Scholership-D'>
          <b>The University of Agriculture offers different Scholarships:</b>
          <p>HEC Ehsas Scholarship</p>
          <p>HEC Need Based Scholarship</p>
          <p>HEC-German Need Based Scholarships</p>
          <p>UAD Need Based Scholarship</p>
          <p>UAD Merit Based Scholarship</p>
          <p>Mora Scholarship</p>
          <p>FATA Scholarship</p>
          <p>Frontier Education Foundation (FEF)</p>
        </div>
     </div>
    </>
  )
}

export default Scholerships
