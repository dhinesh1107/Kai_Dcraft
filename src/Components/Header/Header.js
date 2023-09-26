import React from 'react';
import './Header.css';
import Cart from '../../Images/cart.svg'

const Header = () => {
  return (
    <>
    <div className='navbars d-block d-md-flex'>
        <h2 className='brand'>Kai-Dcraft</h2>  
          <div className="nav-list d-none d-md-flex" id="navbarSupportedContent">
              <a class="nav-links" href="#">Home</a>
              <a class="nav-links" href="#">Product</a>
              <a class="nav-links" href="#">Contact Us</a>
              {/* <img src={Cart} className='cart'/> */}
          </div>          
    </div>
    </>
  )
}

export default Header
