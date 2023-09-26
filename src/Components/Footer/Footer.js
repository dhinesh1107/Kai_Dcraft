import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div class="pg-footer">
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-content-column">
          <div class="footer-logo">
            <h2 className='brands'>Kai-Dcraft</h2>
            <h4>Let's catch <span className='spancls'>Dream</span> together</h4>
          </div>
        </div>
        <div class="footer-content-column">
          <div class="footer-call-to-action">
            <h2 class="footer-call-to-action-title"> Let's Chat</h2>
            <p class="footer-call-to-action-description"> Have a support question?</p>
            <a class="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </a>
            <a class="footer-call-to-action-button button" href="https://instagram.com/kai_dcrafts?igshid=NjIwNzIyMDk2Mg==" target="_self"> Instagram </a>
          </div>
          <div class="footer-call-to-action">
            <h2 class="footer-call-to-action-title"> You Mail Us</h2>
            <p class="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link" target="_self"> kai-dcraft@gmail.com </a></p>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="footer-copyright-wrapper">
          <p class="footer-copyright-text">
            <a class="footer-copyright-link" href="#" target="_self"> ©2023. | Designed By: Mr. D. | All rights reserved. </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer
