import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Login.css";
import { getUser, userLogin } from '../../Store/User/userAction';
import Loader from '../../Components/Loader/Loader';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = (props) => {

    const [userstate, setState] = useState({
        email: '',
        password: '',
    });
    const [ loader, setLoader ] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const EmailChange = (e) => {
        setState({...userstate, email: e.target.value})
    };

    const handlePasswordChange = (e) => {
        setState({...userstate, password: e.target.value})
    };
    const LoginSubmit = async(e) => {
        e.preventDefault();
        userLogin(userstate, props.histroy, async(success, message) => {
            console.log(success, message, "say something");
            if(!success){
                setLoader(false);
            } else {
                setLoader(true);
                const role = sessionStorage.getItem('role');
                //await dispatch(getUser());
                console.log(location)
                if(role === 'user') {
                  console.log('navigate')
                  navigate('/dashboard');
                } 
                else if ( role === 'admin') {
                  console.log(sessionStorage.getItem('role'));
                  navigate('/admin');
                  //getUser();
                }
            }
        });
    };
  return (
    <div className="container">
      <form action="" onSubmit={LoginSubmit}>
        <h1>Login</h1>

        <div className="input-box">
          <input type="text" placeholder="Email" required onChange={EmailChange} value={userstate.email}/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required onChange={handlePasswordChange} value={userstate.password}/>
        </div>

        <div className="remember-forgot">
          <Link to = 'forgot'>Forgot password?</Link>
        </div>

        <button type="submit" className="btn">Login</button>

        <div className="register-link">
          <p>Don't have an account? <Link to = 'register'>Sign Up!</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login;
