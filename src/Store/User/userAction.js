import axios from "axios";
import { PATH, base_url } from "../../Constants";
import { toast } from "react-toastify";
import Register from "../../Pages/Register/Register";

export const userLogin = async (state, history, cb, errorcallback) => {
    // const forgetpassword = sessionStorage.getItem('forgetpassword');
    // const forgetemail = sessionStorage.getItem('forgetemail');
    const data = {
      email: state.email ,
      password: state.password ,
    };
    try {
      const login = await axios.post(`${base_url}${'/auth/login'}`, data);
      console.log(login);
      if (login.status === 200) {
        console.log(login.data);
        toast.success(login.data.message);
        sessionStorage.setItem('token', login.data.token);
        sessionStorage.setItem('role', login.data.role);
        sessionStorage.setItem('name', login.data.data.name);
        sessionStorage.setItem('email', login.data.data.email);
        cb(true);
      } else if (login.status === 400) {
        console.log(login);
        cb(false);
      }
    } catch (error) {
      console.log(error)
    }
  };

  export const getUser = async () => {
    let token = sessionStorage.getItem('token');
    const args = {
      method: 'GET',
      url: `${base_url}${PATH.GetUser}`,
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    };
    try {
      let getUser = await axios(args);
      if(getUser.status == 200 ){
        console.log(getUser)
      }
    } catch (error) {
      console.log(error);
    }
  }

  export const Registration = async(state, cb) => {
    const data = {
      name: state.Name,
      email: state.email,
      password: state.password,
      phone: state.phone_num
    };

    try {
      const registration = await axios.post(`${base_url}${PATH.Registration}`, data);
      console.log(registration)
      if(registration.status === 200) {
        toast.success(registration.data.message)
      } else {
        toast.error('registraion failed')
      }
    } catch (error) {
      console.log(error)
    }
  }