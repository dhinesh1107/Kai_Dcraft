import React from 'react';
import "../Login/Login.css"

const ForgotPassword = () => {
  return (
    <div className="container">
    <form action="" >
      <h3>Forgot Your Password ?</h3>

      <div className="container_body">
        <h6>We will send you an email with a link. Click on the link to set new password.</h6>
      </div>
      <div className="input-box">
        <input type="text" placeholder="Email" />
      </div>

      <button type="submit" className="btn">Send</button>
    </form>
  </div>
  )
}

export default ForgotPassword;
