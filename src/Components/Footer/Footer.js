import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className="pg-footer">
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-content-column">
          <div className="footer-logo">
            <h2 className='brands'>Kai-Dcraft</h2>
            <h4>Let's catch <span className='spancls'>Dream</span> together</h4>
          </div>
        </div>
        <div className="footer-content-column">
          <div className="footer-call-to-action">
            <h2 className="footer-call-to-action-title"> Let's Chat</h2>
            <p className="footer-call-to-action-description"> Have a support question?</p>
            <a className="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </a>
            <a className="footer-call-to-action-button button" href="https://instagram.com/kai_dcrafts?igshid=NjIwNzIyMDk2Mg==" target="_blank"> Instagram </a>
          </div>
          <div className="footer-call-to-action">
            <h2 className="footer-call-to-action-title"> You Mail Us</h2>
            <p className="footer-call-to-action-link-wrapper"> <a className="footer-call-to-action-link" target="_self"> kai-dcraft@gmail.com </a></p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="footer-copyright-wrapper">
          <p className="footer-copyright-text">
            <p > ©2023. | Designed By: <span><a className="footer-copyright-link" href="https://www.instagram.com/__mxyzptlk/" target="_blank">Mr. D</a></span>. | All rights reserved. </p>
          </p>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer
