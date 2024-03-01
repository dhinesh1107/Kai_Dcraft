import React from 'react';
import './Cart.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useState } from 'react';
import Response from '../../Response';
import bin from '../../Images/bin.svg';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const [cart, emptycart] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const navigation = useNavigate();

    const handleIncrement = (e) => {
        setQuantity(quantity  + 1 );
    };
    const handleDecrement = (e) => {
        if (quantity > 1) {
            setQuantity(quantity  - 1 );
        }
    };
    const handleChange = (e) => {
        var value = e.target.value.replace(/[^0-9]/, '');
        value = (value == '' ? 1 : value);
        value = parseInt(value);

        setQuantity(value);
    };
    const reDirect = () => {
        navigation('/checkout');
    }
    console.log('checkout')

  return (
    <>
      <Header/>
      <div className='main'>
            <div className='cart-items'>
                {!cart ? (
                <div className='empty-cart'>
                    <p className='mt-cart'>Your cart is empty. Start shopping now!</p>
                    <a className='adda'>Continue shopping</a>
                    <div className='signup'>
                        <p className='mt-cart m-0 mt-4'>Have an account?</p>
                        <p><a className='adda'>Log in</a> to check out faster.</p>
                    </div>
                </div>
                ) : (
                    Response.cart_product.map((e, idx) => {
                        return(
                            <div className='cart-item' id = {idx}>
                                <div className='item-details'>
                                    <img src ={Object.values(e.img_path)}/>
                                </div>
                                <div className='details'>
                                    <div>
                                        <div className='cart-desc'>
                                        <h6>{e.product_name}</h6>
                                        <h6>Price: Rs.{e.price}</h6>
                                        </div>
                                    </div>
                                    <div className='quantity-bin'>
                                        <div className="cart_component-quantity-input">
                                            <span onClick={handleDecrement}>-</span>
                                            <input type="text" value={e.Quantity} onChange={handleChange} />
                                            <span onClick={handleIncrement}>+</span>
                                        </div>
                                        <img className='bin' src = {bin} onClick={console.log('asdfghjk')}/>
                                    </div>
                                    <div>
                                        <p>Total Rs:{e.total_price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )}
                <hr/>
            </div>
            {!cart ? '' : (
            Response.cart_summary.map((e,idx) => {
                return(
                    <div className='summary'>
                        <h2>Cart Summary</h2>
                        <p>Shipping calculated at checkout.</p>
                        <p>Total Items: {e.toatl_items}</p>
                        <p>Total Price: Rs.{e.total_price}</p>
                        <button className='checkout-btn' onClick={() => {reDirect();}}>Proceed to Checkout</button>
                    </div>
                )
            }))}
      </div>
      <Footer/>
    </>
  )
}

export default Cart