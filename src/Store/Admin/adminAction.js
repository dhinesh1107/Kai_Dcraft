import axios from "axios";
import * as adminActionTypes from './adminActionTypes';
import { PATH, base_url } from "../../Constants";
import { toast } from "react-toastify";

var token = sessionStorage.getItem('token');

export const getAllUser = () => {
    const args = {
        method: 'GET',
        url: `${base_url}${PATH.GetAllUser}`,
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      };
      return async(dispatch) => {
      try {
        let getUser = await axios(args);
        console.log(getUser)
        if(getUser.status == 200 ){
          // let data = getUser.data.data.map((e) => [
          //   e.name,
          //   e.email,
          //   e.role,
          //   e.phone
          // ]);
          dispatch({
            type: adminActionTypes.CUSTOMER_DETAILS,
            payload: getUser.data.data,
          });
          return true;
        }
      } catch (error) {
        console.log(error);
      }
    }
};

export const createProduct = async(value) => {
 
  const args = {
    method: 'POST',
    url: `${base_url}${PATH.AddProduct}`,
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    data: value
  };
  console.log(value)
  try {
    const api = await axios(args)
    console.log(api)
    // if(registration.status === 200) {
    //   toast.success(registration.data.message)
    // } else {
    //   toast.error('registraion failed')
    // }
  } catch (error) {
    console.log(error)
  }
};

export const uploadImg = async(data) => {
  const formData = new FormData();
  for( let i = 0; i < data.length; i++){
    formData.append("files", data[i])
  }
  console.log(data)
  const args = {
    method: 'POST',
    url: `${base_url}${PATH.uploadImg}`,
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`
  },
  data: formData
  };

  try {
    const api = await axios(args);
    console.log(api);
  } catch (error) {
    console.log(error);
  }
}