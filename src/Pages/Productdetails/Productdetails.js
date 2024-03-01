import React,{useState} from 'react';
import { Checkbox } from 'semantic-ui-react';
import './Productdetails.css';
import Response from '../../Response';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import dc1 from '../../Images/DC/dc1.jpg';
import BasicModal from '../../Components/Modal/Modal';
import { useNavigate } from 'react-router-dom';

const Productdetails = () => {
    const [giftMsg, setGiftMsg] = useState(false);
    const [addToCart, setAddToCart] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const navigation = useNavigate();
    
    const reDirect = () => {
      navigation('/checkout');
    }
    //let checkbox.checked; // it returns Boolean value
    const addCart = () => {
        setAddToCart(true);
    };
    const giftmessage = (e) => {
        setGiftMsg(e.target.checked);
    };
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
  return (
    <div>
        <Header/>
        <div className="product-detail">
            {Response.product_details.map((e,idx) =>{})}
            <h1 className="product-name">The Catcher</h1>
            <img className="product-image" src={dc1}/>
            <div className="product-price">
                Price: Rs.400
                <div className='price-end'>
                    <button className="product-detail_btn" onClick={() => {setAddToCart(!addToCart)}}>Add to Cart</button>
                    <button className="product-detail_btn" onClick={() => {reDirect();}}>Buy Now</button>
                </div>
            </div>
            <div className='quantity mb-2'>
                <label>Quantity</label>
                <div className="component-quantity-input">
                    <span onClick={handleDecrement}>-</span>
                    <input type="text" value={quantity} onChange={handleChange}/>
                    <span onClick={handleIncrement}>+</span>
                </div>
            </div>
            <div>
                <p>Tax included. Shipping calculated at checkout.</p>
            </div>
            <div className='d-flex gift pb-2'>
                <Checkbox type='checkbox' onChange={(e) => {giftmessage(e)}}/>
                <p className='m-0'>Add Gift Wrap to your Order( Rs. 30 )</p>
            </div>
            {giftMsg ? 
                <textarea className="msg-input" placeholder="Gift Message..."></textarea> : '' }
            <div className="product-description">
                {/* <h2>Description</h2> */}
                <p>A decorative object consisting of a ring with a net of string across it and feathers, etc, and thought to bring its owner good dreams.</p>
            </div>
            <div className="product-features">
                <h2>Care Instructions</h2>
                <ul>
                    <li>For indoor use only. keep away from direct harsh sunlight and moisture to retain the freshness of feathers for longer period of time.</li>
                </ul>
            </div>
            <div className="product-specifications">
                <h2>Specifications</h2>
                <ul>
                    <li>Size: Available in various sizes.</li>
                    <li>Color: Available in different colors.</li>
                </ul>
            </div>
            <div className='product-specifications'>
                <h2>Shipping & Returns</h2>
                <ul>
                    <li>After placing an order- cancellation and refunds are not allowed.</li>
                    <li>In case of damage during transit product will be exchanged.</li>
                    <li>Incase of customer dissatisfaction product will be exchanged.</li>
                </ul>
            </div>
            {/* <div className="reviews">
                <h2>Reviews</h2>
                <div className="review">
                    <div className="review-rating">5 Stars</div>
                    <div className="review-text">"Amazing product, highly recommended!"</div>
                </div>
                <div className="review">
                    <div className="review-rating">4 Stars</div>
                    <div className="review-text">"Amazing product, highly recommended!"</div>
                </div>
                <div className="review">
                    <div className="review-rating">3 Stars</div>
                    <div className="review-text">"Amazing product, highly recommended!"</div>
                </div>
            </div>
            <div className="write-review">
                <h2>Write a Review</h2>
                <div className="review-options">
                    <button className="star-button">5 Stars</button>
                    <button className="star-button">4 Stars</button>
                    <button className="star-button">3 Stars</button>
                    <button className="star-button">2 Stars</button>
                    <button className="star-button">1 Stars</button>
                </div>
                <textarea className="review-input" placeholder="Write your review..."></textarea>
                <button className="collection_container_btn">Submit Review</button>
            </div> */}
        </div>
        <Footer/>
    {addToCart && 
    <BasicModal 
    handleClick={() => setAddToCart(true)}
    handleClose={() => setAddToCart(false)}
    src={dc1}
    text={'The Catcher'}
    />
    }      
    </div>
  )
}

export default Productdetails