import { Outlet, Navigate, useLocation} from 'react-router-dom';

const PrivateRoutes = () => {
    //let auth = {'token': false}
    const token = sessionStorage.getItem('token');
    const Authenticated = token;
    const location = useLocation();
  return (
    Authenticated ? <Outlet/> : <Navigate to = '/login' state={{ from: location}}/>
  )
};

export default PrivateRoutes;
