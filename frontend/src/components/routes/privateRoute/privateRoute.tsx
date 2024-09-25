import { Navigate, Outlet } from 'react-router-dom';
import UseAuth from '../../hooks/useAuth';

const PrivateRoute: React.FC = () => {
  const isUserLogin: boolean = UseAuth(); // Явна типізація як boolean
console.log("isUserLogin", isUserLogin)
  if (!isUserLogin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;