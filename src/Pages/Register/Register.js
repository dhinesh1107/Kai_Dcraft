import React, { useState } from 'react';
import "../Login/Login.css";
import { Registration } from '../../Store/User/userAction';
import { Link } from 'react-router-dom';

const Register = (props) => {

    const [userstate, setState] = useState({
        Name: '',
        phone_num: '',
        email: '',
        password: '',
    });
    const [ loader, setLoader ] = useState(false);

    const NameChange = (e) => {
        setState({...userstate, Name: e.target.value})
    };

    const PhNumChange = (e) => {
        setState({...userstate, phone_num: e.target.value})
    };

    const EmailChange = (e) => {
        setState({...userstate, email: e.target.value})
    };

    const handlePasswordChange = (e) => {
        setState({...userstate, password: e.target.value})
    };

const RegisterSubmit = async(e) => {
    e.preventDefault();
    Registration(userstate, props.histroy, async(success, message) => {
        console.log(userstate, "say something");
            if(!success){
                setLoader(false);
            } else {
                setLoader(true);
                //const
            }
   });
};
  return (
    <div className="container">
      <form action="" onSubmit={RegisterSubmit}>
        <h1>Sign Up</h1>

        <div className="input-box">
          <input type="text" placeholder="Name" required onChange={NameChange} value={userstate.name}/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Phone Number" required onChange={PhNumChange} value={userstate.phone_num}/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Email" required onChange={EmailChange} value={userstate.email}/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required onChange={handlePasswordChange} value={userstate.password}/>
        </div>

        <button type="submit" className="btn">Sign Up</button>

        <div className="register-link">
          <p>have an account? <Link to = '/'>Login!</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Register;
