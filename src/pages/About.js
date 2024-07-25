import React,{useEffect} from 'react'

const About = () => {
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

    const sections = document.querySelectorAll('.About');

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
    <div className='About'>
      <div className='AboutHeading'>Introducion</div>
      <div className='AboutDiscription'>The University of Agriculture (UAD), Dera Ismail Khan is a newly established University, 
        charted by the Khyber Pakhtunkhwa Provincial Assembly on March 2018 and recognized by HEC Pakistan.
        The University started its academic activities for the Fall-2019. The Government of 
        Khyber Pakhtunkhwa has allocated Rs.1000 million for the development works of the University. 
        The University of Agriculture is located Fatheh Mor, Dera Ismail Khan.
        Currently, UAD is offering different undergraduate and diploma programs. Keeping in view the 
        purpose of its research orientation, University has started work to develop various research 
        organizations i.e. Date Palm Research Institute Dhakki DIKhan, Temperate Research Institute Wana, 
        Sugarcane Research Institute DIKhan.
      </div>
    </div>
    </>
  )
}

export default About
