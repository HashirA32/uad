import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="Footer">
        
        <div className="pg-footer">
    <footer className="footer">
      <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div className="footer-content">
        <div className="footer-content-column">
          <div className="footer-logo">
            <a className="footer-logo-link" href="/">
              <span className="hidden-link-text">UAD</span>
              <h1>UAD</h1>
            </a>
          </div>
          
        </div>
        <div className="footer-content-column">
          <div className="footer-menu">
            <h2 className="footer-menu-name"> Company</h2>
            <ul id="menu-company" className="footer-menu-list">
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/">Contact</a>
              </li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                <a href="/">News</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/">Careers</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h2 className="footer-menu-name"> Legal</h2>
            <ul id="menu-legal" className="footer-menu-list">
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                <a href="/">Privacy Notice</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content-column">
          <div className="footer-menu">
            <h2 className="footer-menu-name"> Quick Links</h2>
            <ul id="menu-quick-links" className="footer-menu-list">
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="/">Support Center</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="/">Contact Directory</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/">News & Events</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/">Blog</a>
              </li>
              <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                <a href="/">Recent Jobs</a></li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/">Reviews</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content-column">
          <div className="footer-call-to-action">
            <h2 className="footer-call-to-action-title"> Let's Chat</h2>
            <p className="footer-call-to-action-description"> Have a support question?</p>
            <a className="footer-call-to-action-button button" href="/" target="_self"> Get in Touch </a>
          </div>
          <div className="footer-call-to-action">
            <h2 className="footer-call-to-action-title"> You Call Us</h2>
            <p className="footer-call-to-action-link-wrapper"> <a className="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> (+92) 966 750153 </a></p>
          </div> 
        </div>
        
      </div>
      <div className="footer-copyright">
        <div className="footer-copyright-wrapper">
          <p className="footer-copyright-text">
            <a className="footer-copyright-link" href="/" target="_self"> Copyright ©2024 All rights reserved | University Of Agriculture D.I.Khan </a>
          </p>
        </div>
      </div>
    </footer>
  </div>

        </div> 
    </>
  )
}

export default Footer
