import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {

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

    const sections = document.querySelectorAll('.hero');

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
    <div className="hero">
      <div className="hero-text">
        Join the <Link to="/" className='hero-text-Link' data-text="UAD">UAD</Link> Community, where passion <br />ignites purpose.
      </div>
      <div className="name">
        <a className='hero-text-Link' data-text="University of Agriculture Dera Ismail Khan" href='/'>University of Agriculture Dera Ismail Khan</a>
      </div>
    </div>
  );
};

export default Hero;
