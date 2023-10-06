import React from 'react';
import './Productdetails.css';
import Header from '../../Components/Header/Header';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ch1 from '../../Images/car-hangs/ch1.jpg';

const Productdetails = () => {
  return (
    <>
      <Header/>
      <Carousel showThumbs={true} showStatus={false} className='pt-3'>
            <div>
                <img src={ch1} />
            </div>
            <div>
                <img src={ch1} />
            </div>
            <div>
                <img src={ch1} />
            </div>
      </Carousel>
    </>
  )
}

export default Productdetails
