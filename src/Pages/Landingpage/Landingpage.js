import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Landingpage.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import dc from '../../Images/dc.jpg';
import dchangings from '../../Images/carhanging.jpg';
import addcart from '../../Images/addcart.svg';
import Response from '../../Response';
import { useNavigate } from 'react-router-dom';
import BasicModal from '../../Components/Modal/Modal';
import dc1 from '../../Images/DC/dc1.jpg';


const Landingpage = () => {
  const [addToCart, setAddToCart] = useState(false);
  const navigation = useNavigate();
  
  const reDirect = () => {
    navigation('/productdetails');
}
  return (
    <>
      <Header/>
      <div className='home'>
        <div className='Home_container'>
          <p className='quote'>Dont let someone else catch your dreams. You be the Dreamcatcher</p>
          {/* <button className='shop_now'>Explore</button> */}
        </div>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className='pt-3'>
          {Response.Product_Carousel.map((e,idx) => {
            return(
              <div>
                <img id = {idx} src={Object.values(e.img_path)} />
              </div>
            )
          })}
        </Carousel>
      </div>
      {/* Home_container */}
      <div className='Home_collectios p-4'>
        <h4 className='titles'>Collections</h4>
        <div className='collection_img d-flex justify-content-center align-items-center'>
          <div className='position-relative img_container'>
            <img className='collection_container  ' src={dchangings} />
            <button className='collection_container_btn position-absolute'>Car Hangings</button>
          </div>
          <div className='position-relative img_container'>
            <img className='collection_container  ' src={dc} />
            <button className='collection_container_btn position-absolute'>Dreamcatcher</button>
          </div>
        </div>
      </div>
      {/* Home_products_car_hangs */}
      <div className="container">
        <h4 className='titles'>Car Hangings</h4>
        <div className="row" id="ads">
          {Response.car_hangs.map((e, idx) => {
            return (
              <div className="col-md-3 col-6 mb-5" id={`carhangs-${idx}`}>
                <div className="card cards rounded">
                  <div className="card-image">
                    <span className="card-notify"><img src={addcart} /></span>
                    <img className="img-fluid collection_container" src={Object.values(e.img_path)} alt="Alternate Text" />
                  </div>
                  <div className="card-body pt-2 text-center">
                    <div className="ad-title m-auto">
                      <h5>{e.product_name}</h5>
                      {/* <h5>Rs: ___</h5> */}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* Home_products_dreamcatcher */}
      <div className="container">
        <h4 className='titles'>Dreamcatchers</h4>
        <div className="row" id="ads">
          {Response.dreamcatcher.map((e,idx) => {
            return(
              <div className="col-md-3 col-6 mb-5" id={`dreamcatcher-${idx}`}>
                <div className="card cards rounded">
                  <div className="card-image">
                    <span className="card-notify"><img className='addcart' src={addcart} onClick={() => {setAddToCart(!addToCart);}}/></span>
                    <img className="img-fluid collection_container" src={Object.values(e.img_path)} onClick={() => {reDirect();}} alt="Alternate Text" />
                  </div>
                  <div className="card-body pt-2 text-center">
                    <div className="ad-title m-auto">
                      <h5>{e.product_name}</h5>
                      {/* <h5>Rs: ___</h5> */}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
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
    </>
  )
}

export default Landingpage
