import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Modal.css'
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  fontFamily: 'poppins',
  top: '27%',
  left: {xs:'50%',md:'82%', lg:'85%', xl:'88%'},
  transform: 'translate(-50%, -50%)',
//   width: 340,
  width: {xs:280, md:290, lg:300, xl:340},
  height: {xs:360, md:375, lg:370, xl:400},
  bgcolor: 'background.paper',
  border: '2px solid #283F3B',
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
};

const BasicModal = ({
    handleClick,
    handleClose,
    src,
    text,
}) => {
  const navigation = useNavigate();
  
  const reDirect = (page) => {
    if(page === 'cart'){
      navigation('/cart');
    } else {
      navigation('/checkout');
    }
    
}

  return (
    <div>
      <Modal
        open={handleClick}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='box'>
          <p className='modeltitle' id="modal-modal-title" variant="h6" component="h2">
            Item Added to your Cart
          </p>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <div className='d-grid'>
            <h6 className='mt-1'>{text}</h6>
            <img className='addcartimg mt-1' src={src}/>
            <div className='mt-2 addbutton'>
                <button className="product-detail_btn" onClick={() => {reDirect('cart');}}>View Cart</button>
                <button className="product-detail_btn" onClick={() => {reDirect('checkout');}}>Check Out</button>
                <a onClick={handleClose} className='adda'>Continue shopping</a>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
