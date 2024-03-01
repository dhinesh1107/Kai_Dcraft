import React from 'react';
import './Header.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Cart from '../../Images/cart.svg'

const Header = () => {
  const navigate = useNavigate();
  const Location = useLocation();
  const reDirect = (dash) => {
    if(Location.pathname === '/product'){
      if(dash === 'cart'){
        navigate('/cart');
      } else{
      navigate('/dash');
      }
    }
    else if(dash === 'dash'){
      navigate('/dash');
    } else if(dash === 'cart'){
      navigate('/cart');
    }
     else{
    navigate('/product');
    }
  }
  return (
    <>
    <div className='navbars d-block d-md-flex'>
        <h2 className='brand'>Kai-Dcraft</h2>  
          <div className="nav-list d-none d-md-flex" id="navbarSupportedContent">
              <a className="nav-links" href="/land">Home</a>
              <a className="nav-links" href="/">Product</a>
              <a className="nav-links" href="/">Contact Us</a>
              <img src={Cart} className='cart' onClick={() => {reDirect('cart');}}/>
          </div>          
    </div>
    </>
  )
}

export default Header
