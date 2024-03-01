import dcone from '../src/Images/dcone.jpg'
import dctwo from '../src/Images/dctwo.jpg'
import dcthree from '../src/Images/dcthree.jpg'
import dcfour from '../src/Images/dcfour.jpg'

import ch1 from '../src/Images/car-hangs/ch1.jpg'
import ch2 from '../src/Images/car-hangs/ch2.jpg'
import ch3 from '../src/Images/car-hangs/ch3.jpg'
import ch4 from '../src/Images/car-hangs/ch4.jpg'

import dc1 from '../src/Images/DC/dc1.jpg'
import dc2 from '../src/Images/DC/dc2.jpg'
import dc3 from '../src/Images/DC/dc3.jpg'
import dc4 from '../src/Images/DC/dc4.jpg'
import dc5 from '../src/Images/DC/dc5.jpg'
import dc6 from '../src/Images/DC/dc6.jpg'
export default{
    "Product_Carousel": [
        {
            "id": 0,
            "img_path": {dcone}
        },
        {
            "id": 1,
            "img_path": {dctwo}
        },
        {
            "id": 2,
            "img_path": {dcthree}
        },
        {
            "id": 3,
            "img_path": {dcfour}
        }
    ],

    "collections": [
      {
        "id": 0,
        "name": "Car hangs"
      },
      {
        "id": 1,
        "name": "Dreamcatcher"
      },
    ],

    "car_hangs": [
        {
          "product_id": 0,
          "product_name": "Scented Car Decor",
          "price": 400,
          "img_path": {ch1}
        },
        {
          "product_id": 1,
          "product_name": "Cherry Car Decor",
          "price": 400,
          "img_path": {ch2}
        },
        {
          "product_id": 2,
          "product_name": "Minimal Car Decor",
          "price": 400,
          "img_path": {ch3}
        },
        {
          "product_id": 3,
          "product_name": "Moon Car Decor",
          "price": 400,
          "img_path": {ch4}
        }
    ],

    "dreamcatcher": [
        {
          "product_id": 0,
          "product_name": "Dreamcatcher",
          "price": 400,
          "img_path": {dc1}
        },
        {
            "product_id": 1,
            "product_name": "Dreamcatcher",
            "price": 400,
            "img_path": {dc2}
        },
        {
            "product_id": 2,
            "product_name": "Dreamcatcher",
            "price": 400,
            "img_path": {dc3}
        },
        {
            "product_id": 3,
            "product_name": "Dreamcatcher",
            "price": 400,
            "img_path": {dc4}
        },
        {
            "product_id": 4,
            "product_name": "Dreamcatcher",
            "price": 400,
            "img_path": {dc5}
        },
        {
            "product_id": 5,
            "product_name": "Dreamcatcher",
            "price": 400,
            "img_path": {dc6}
        },
          
    ],



    "cart_product" : [
      {
        "product_id": 0,
        "product_name": "DreamCatcher",
        "price": 400,
        "Quantity": 2,
        "img_path": {dc2},
        "total_price": 800,
      },
      {
        "product_id": 0,
        "product_name": "DreamCatcher",
        "price": 400,
        "Quantity": 1,
        "img_path": {dc4},
        "total_price": 400,
      },
    ],
    "cart_summary": [
      {
        "toatl_items": 3,
        "total_price": 1200
      }
    ],
    "product_details": [
      {
        "product_id": 0,
        "prodct_name": "DreamCatcher",
        "img_path": {dc1},
        "price": 400,
        "product_des": "A decorative object consisting of a ring with a net of string across it and feathers, etc, and thought to bring its owner good dreams",
        "product_features": {
          0: 'Its shape has meaning.',
          1: 'They are meant to catch only the bad dreams.',
          2: 'Sunlight cleanses them.',
        },
        "product_spec": {
          "Size": "Available in various sizes.",
          "Color": "Available in different colors.",
        }
      }
    ],
    "add_to_cart": [
      {
        "product_id": 0,
        "prodct_name": "DreamCatcher",
      }
    ],
    "checkout_details": [
      {
        "email": "sfdf",
        "name": "ere",
        "address": "qwerty",
        "city": "asde",
        "state": "ytui",
        "pincode": "1478963",
        "contact": "1234567890",
        "Region": "India",
        "billing_address": {
          "email": "sfdf",
          "name": "ere",
          "address": "qwerty",
          "city": "asde",
          "state": "ytui",
          "pincode": "1478963",
          "contact": "1234567890",
          "Region": "India",
        },
      }
    ],
    "transcation_deatils": [
      {
        "trans_id": "razorpay_payment_id"
      }
    ],
}