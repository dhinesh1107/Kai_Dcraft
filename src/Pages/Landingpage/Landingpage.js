import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Landingpage.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import dcone from '../../Images/dcone.jpg';
import dctwo from '../../Images/dctwo.jpg';
import dcthree from '../../Images/dcthree.jpg';
import dcfour from '../../Images/dcfour.jpg';
import dc from '../../Images/dc.jpg';
import dchangings from '../../Images/carhanging.jpg';
import ch1 from '../../Images/car-hangs/ch1.jpg';
import ch2 from '../../Images/car-hangs/ch2.jpg';
import ch3 from '../../Images/car-hangs/ch3.jpg';
import ch4 from '../../Images/car-hangs/ch4.jpg';
import addcart from '../../Images/addcart.svg';
import dc1 from '../../Images/DC/dc1.jpg';
import dc2 from '../../Images/DC/dc2.jpg';
import dc3 from '../../Images/DC/dc3.jpg';
import dc4 from '../../Images/DC/dc4.jpg';
import dc5 from '../../Images/DC/dc5.jpg';
import dc6 from '../../Images/DC/dc6.jpg';


const Landingpage = () => {
  return (
    <>
      <Header/>
      <div className='home'>
        <div className='Home_container'>
          <p className='quote'>Dont let someone else catch your dreams. You be the Dreamcatcher</p>
          {/* <button className='shop_now'>Explore</button> */}
        </div>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className='pt-3'>
          <div>
            <img src={dcone} />
          </div>
          <div>
            <img src={dctwo} />
          </div>
          <div>
            <img src={dcthree} />
          </div>
          <div>
            <img src={dcfour} />
          </div>
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
          <div className="col-md-3 mb-5">
            <div className="card cards rounded">
              <div className="card-image">
                <span className="card-notify-year"><img src={addcart}/></span>
                <img className="img-fluid collection_container" src={ch1} alt="Alternate Text" />
              </div>
              <div className="card-body pt-2 text-center">
                <div className="ad-title m-auto">
                  <h5>Scented Car Decor</h5>
                  {/* <h5>Rs: ___</h5> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="card cards rounded">
              <div className="card-image">
                <span className="card-notify-year"><img src={addcart}/></span>
                <img className="img-fluid collection_container" src={ch2} alt="Alternate Text" />
              </div>
              <div className="card-body pt-2 text-center">
                <div className="ad-title m-auto">
                  <h5>Cherry Car Decor</h5>
                  {/* <h5>Rs: ___</h5> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="card cards rounded">
              <div className="card-image">
                <span className="card-notify-year"><img src={addcart}/></span>
                <img className="img-fluid collection_container" src={ch3} alt="Alternate Text" />
              </div>
              <div className="card-body pt-2 text-center">
                <div className="ad-title m-auto">
                  <h5>Minimal Car Decor</h5>
                  {/* <h5>Rs: ___</h5> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="card cards rounded">
              <div className="card-image">
                <span className="card-notify-year"><img src={addcart}/></span>
                <img className="img-fluid collection_container" src={ch4} alt="Alternate Text" />
              </div>
              <div className="card-body pt-2 text-center">
                <div className="ad-title m-auto">
                  <h5>Moon Car Decor</h5>
                  {/* <h5>Rs: ___</h5> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Home_products_dreamcatcher */}
      <div className="container">
        <h4 className='titles'>Dreamcatchers</h4>
        <div className="row" id="ads">
          <div className="col-md-3 mb-5">
            <div className="card cards rounded">
              <div className="card-image">
                <span className="card-notify-year"><img src={addcart}/></span>
                <img className="img-fluid collection_container" src={dc1} alt="Alternate Text" />
              </div>
              <div className="card-body pt-2 text-center">
                <div className="ad-title m-auto">
                  <h5>Dreamcatcher</h5>
                  {/* <h5>Rs: ___</h5> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="card cards rounded">
              <div className="card-image">
                <span className="card-notify-year"><img src={addcart}/></span>
                <img className="img-fluid collection_container" src={dc2} alt="Alternate Text" />
              </div>
              <div className="card-body pt-2 text-center">
                <div className="ad-title m-auto">
                  <h5>Dreamcatcher</h5>
                  {/* <h5>Rs: ___</h5> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="card cards rounded">
              <div className="card-image">
                <span className="card-notify-year"><img src={addcart}/></span>
                <img className="img-fluid collection_container" src={dc3} alt="Alternate Text" />
              </div>
              <div className="card-body pt-2 text-center">
                <div className="ad-title m-auto">
                  <h5>Dreamcatcher</h5>
                  {/* <h5>Rs: ___</h5> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="card cards rounded">
              <div className="card-image">
                <span className="card-notify-year"><img src={addcart}/></span>
                <img className="img-fluid collection_container" src={dc4} alt="Alternate Text" />
              </div>
              <div className="card-body pt-2 text-center">
                <div className="ad-title m-auto">
                  <h5>Dreamcatcher</h5>
                  {/* <h5>Rs: ___</h5> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="card cards rounded">
              <div className="card-image">
                <span className="card-notify-year"><img src={addcart}/></span>
                <img className="img-fluid collection_container" src={dc5} alt="Alternate Text" />
              </div>
              <div className="card-body pt-2 text-center">
                <div className="ad-title m-auto">
                  <h5>Dreamcatcher</h5>
                  {/* <h5>Rs: ___</h5> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="card cards rounded">
              <div className="card-image">
                <span className="card-notify-year"><img src={addcart}/></span>
                <img className="img-fluid collection_container" src={dc6} alt="Alternate Text" />
              </div>
              <div className="card-body pt-2 text-center">
                <div className="ad-title m-auto">
                  <h5>Dreamcatcher</h5>
                  {/* <h5>Rs: ___</h5> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Landingpage
