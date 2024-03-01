import React, {Suspense, useEffect, useState} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from 'react-router-dom';
  import Loader from '../Components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import PrivateRoutes from './PrivateRoutes';

const LazyLogin = React.lazy(() => import('../Pages/Login/Login'));

const LazyRegister = React.lazy(() => import('../Pages/Register/Register'));

const LazyForgot = React.lazy(() => import('../Pages/Forgotpassword/ForgotPassword'));

const LazyLanding = React.lazy(() => import('../Pages/Landingpage/Landingpage'));

const LazyProductDetails = React.lazy(() => import('../Pages/Productdetails/Productdetails'));

const LazyCart = React.lazy(() => import('../Pages/Cart/Cart'));

const LazyCheckout = React.lazy(() => import('../Pages//Checkout/Checkout'));

//Admin Side Renders

const LazyAdminLayout = React.lazy(() => import('../Components/AdminLayout/AdminLayout'));

const LazyCustomers = React.lazy(() => import('../Pages/Admin/Customers'));

const LazyAddProduct = React.lazy(() => import('../Pages/Admin/Addproduct'));


const RootRouter = () => {
  const token = sessionStorage.getItem('token');
  const Authenticated = token;
  const [flagType, setFlagType] = useState(false);

useEffect(() => {
      if(sessionStorage.getItem("role") === "admin"){
        setFlagType("admin");
      } else if (sessionStorage.getItem("role") === "user") {
        setFlagType("user")
      }
}, [sessionStorage.getItem("role")]);
  return (
    <>
    <ToastContainer/>
    <div>
    {console.log("into rootrouter")}
        <Suspense >
        <Router>
        {/* { Authenticated ? <HomeRoutes/> : <AuthRoutes/> }  */}
          <Routes>
            <Route path='/' exact element={<LazyLogin/>} />
            <Route path='/register' exact element={<LazyRegister/>}/>
            <Route path='/forgot' exact element={<LazyForgot/>}/>
            <Route element={<PrivateRoutes/>}>
              { flagType === 'user' ?
              (
                <>
              <Route path='/dashboard' exact element={<LazyLanding/>}/>
              <Route path='/productdetails' exact element={<LazyProductDetails/>}/>
              <Route path='/cart' exact element={<LazyCart/>}/>
              <Route path='/checkout' exact element={<LazyCheckout/>}/>
              </> 
              ) : 
              (
                <>
                  <Route path='/admin' element={ <LazyAdminLayout/> }>
                    <Route path='customers' element={<LazyCustomers/>}/>
                    <Route path='product' element={<LazyAddProduct/>}/>
                  </Route>
                </>
              ) 
              }
            </Route>
          </Routes>
        </Router>
        </Suspense>
    </div>
    </>
  )
}

export default RootRouter