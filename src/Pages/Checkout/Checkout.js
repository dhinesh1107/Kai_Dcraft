import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Checkout.css';
import Response from '../../Response';
import { Checkbox } from 'semantic-ui-react';

const Checkout = () => {
    const [checked, setChecked] = useState(false);
    const [amount, setAmount] = useState('1');
    const handleCheck = (e) => {
        if(e._reactName === 'onClick'){
            setChecked(!checked)
        } else {
        setChecked(e.target.checked);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var options = {
            key: 'rzp_test_wsJSRwkKhkgCIC',
            key_secret: 'nE57jgkiIj1BeX6KGi6MKdh9',
            amount: amount * 100,
            currency: 'INR',
            name: 'KaiDcraft',
            description: 'Dream Knots',
            handler: function(response){
                alert(response.razorpay_payment_id);
            },
            prefill: { // form details data
                name: 'dhinesh',
                email: 'dineshpandi714@gmail.com',
                contact: '7904319253',
            },
            notes:{
                address: 'Razorpay Corporate Office'
            },
            theme:{
                color: '#99DDC8'
            }
        };
        var pay = new window.Razorpay(options);
        pay.open();
    }
  return (
<div>
    <Header/>
        <div className='mainn'>
            <div className='content d-grid d-md-flex'>
                <div className='billing-details'>
                    <div>
                        <h2>Contact</h2>
                        <form action="" className="form mb-3">
                            <div className="form__div">
                                <input type="text" className="form__input" placeholder=" " />
                                <label for="" className="form__label">Email</label>
                            </div>
                        </form>
                    </div>
                    <h2>Delivery</h2>
                    <form action="" className="form mb-3">
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " />
                            <label for="" className="form__label">FullName</label>
                        </div>    
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " />
                            <label for="" className="form__label">Address</label>
                        </div>    
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " />
                            <label for="" className="form__label">City</label>
                        </div>    
                        <div className="form__div">
                            <select id="state" name="state" required className='form__input'>
                                <option value="SL">Select</option>
                                <option value="AP">Andhra Pradesh</option>
                                <option value="AR">Arunachal Pradesh</option>
                                <option value="AS">Assam</option>
                                <option value="BR">Bihar</option>
                                <option value="CT">Chhattisgarh</option>
                                <option value="GA">Gujarat</option>
                                <option value="HR">Haryana</option>
                                <option value="HP">Himachal Pradesh</option>
                                <option value="JK">Jammu and Kashmir</option>
                                <option value="GA">Goa</option>
                                <option value="JH">Jharkhand</option>
                                <option value="KA">Karnataka</option>
                                <option value="KL">Kerala</option>
                                <option value="MP">Madhya Pradesh</option>
                                <option value="MH">Maharashtra</option>
                                <option value="MN">Manipur</option>
                                <option value="ML">Meghalaya</option>
                                <option value="MZ">Mizoram</option>
                                <option value="NL">Nagaland</option>
                                <option value="OR">Odisha</option>
                                <option value="PB">Punjab</option>
                                <option value="RJ">Rajasthan</option>
                                <option value="SK">Sikkim</option>
                                <option value="TN">Tamil Nadu</option>
                                <option value="TG">Telangana</option>
                                <option value="TR">Tripura</option>
                                <option value="UT">Uttarakhand</option>
                                <option value="UP">Uttar Pradesh</option>
                                <option value="WB">West Bengal</option>
                                <option value="AN">Andaman and Nicobar Islands</option>
                                <option value="CH">Chandigarh</option>
                                <option value="DN">Dadra and Nagar Haveli</option>
                                <option value="DD">Daman and Diu</option>
                                <option value="DL">Delhi</option>
                                <option value="LD">Lakshadweep</option>
                                <option value="PY">Puducherry</option>
                            </select>
                            <label for="" className="form__label">State</label>
                        </div>    
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " />
                            <label for="" className="form__label">Pincode</label>
                        </div>    
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " />
                            <label for="" className="form__label">Phone</label>
                        </div>    
                        <div className="form__div">
                            <select id="country" name="country" required className="form__input">
                                <option value="tn">India</option>
                            </select>
                            <label for="" className="form__label">Region</label>
                        </div>
                    </form>
                    <div>
                        <h2 className = 'payment__h2'>Payment</h2>
                        <p>All transactions are secure and encrypted.</p>
                        <div className='payment'>
                            <p>Razorpay Secure (UPI, Cards, Wallets, NetBanking)</p>
                            <hr className='mt-0 mb-0'/>
                            <p className='pay-details'>After clicking “Pay now”, you will be redirected to Razorpay Secure (UPI, Cards, Wallets, NetBanking) to complete your purchase securely.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='mb-0'>Billing Address</h2>
                        <p>Default as Shipping Address or can change</p>
                        <div className='radio-btns'>
                            <div className='radio-btn'>
                                <Checkbox type='checkbox' onChange={(e) => {handleCheck(e)}} onClick={(e) => {handleCheck(e)}} label = "Use a diffrent billing Address"/>
                            </div>
                        </div>
                    </div>
                    {
                        checked ? 
                        <form action="" className="form mb-3">
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " />
                            <label for="" className="form__label">FullName</label>
                        </div>
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " />
                            <label for="" className="form__label">Address</label>
                        </div>    
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " />
                            <label for="" className="form__label">City</label>
                        </div>    
                        <div className="form__div">
                            <select id="state" name="state" required className='form__input'>
                                <option value="SL">Select</option>
                                <option value="AP">Andhra Pradesh</option>
                                <option value="AR">Arunachal Pradesh</option>
                                <option value="AS">Assam</option>
                                <option value="BR">Bihar</option>
                                <option value="CT">Chhattisgarh</option>
                                <option value="GA">Gujarat</option>
                                <option value="HR">Haryana</option>
                                <option value="HP">Himachal Pradesh</option>
                                <option value="JK">Jammu and Kashmir</option>
                                <option value="GA">Goa</option>
                                <option value="JH">Jharkhand</option>
                                <option value="KA">Karnataka</option>
                                <option value="KL">Kerala</option>
                                <option value="MP">Madhya Pradesh</option>
                                <option value="MH">Maharashtra</option>
                                <option value="MN">Manipur</option>
                                <option value="ML">Meghalaya</option>
                                <option value="MZ">Mizoram</option>
                                <option value="NL">Nagaland</option>
                                <option value="OR">Odisha</option>
                                <option value="PB">Punjab</option>
                                <option value="RJ">Rajasthan</option>
                                <option value="SK">Sikkim</option>
                                <option value="TN">Tamil Nadu</option>
                                <option value="TG">Telangana</option>
                                <option value="TR">Tripura</option>
                                <option value="UT">Uttarakhand</option>
                                <option value="UP">Uttar Pradesh</option>
                                <option value="WB">West Bengal</option>
                                <option value="AN">Andaman and Nicobar Islands</option>
                                <option value="CH">Chandigarh</option>
                                <option value="DN">Dadra and Nagar Haveli</option>
                                <option value="DD">Daman and Diu</option>
                                <option value="DL">Delhi</option>
                                <option value="LD">Lakshadweep</option>
                                <option value="PY">Puducherry</option>
                            </select>
                            <label for="" className="form__label">State</label>
                        </div>    
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " />
                            <label for="" className="form__label">Pincode</label>
                        </div>    
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " />
                            <label for="" className="form__label">Phone</label>
                        </div>    
                        <div className="form__div">
                            <select id="country" name="country" required className="form__input">
                                <option value="tn">India</option>
                            </select>
                            <label for="" className="form__label">Region</label>
                        </div>
                    </form> :
                    ""
                    }
                    <input type="submit" className="form__button" value="Paynow" onClick={(e) => {handleSubmit(e)}}/>
                </div>
                <div className='order-summary'>
                    {Response.cart_summary.map((e,idx) => {
                    return(
                        <div className='summaryy'>
                            <h2>Cart Summary</h2>
                            <p>Total Items: {e.toatl_items}</p>
                            <p>Sub Total: Rs.{e.total_price}</p>
                            <p>Shipping: Rs. 200</p>
                            <p>Total: Rs. 1400</p>
                        </div>
                        )
                        })}
                </div>
            </div>
        </div>
    <Footer/>
</div>
  )
}

export default Checkout