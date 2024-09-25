import { Navigate, Outlet } from 'react-router-dom';
import UseAuth from '../../hooks/useAuth';

const PublicRoute: React.FC = () => {
  const isUserLogin: boolean = UseAuth(); // Явна типізація як boolean
console.log("isUserLogin", isUserLogin)
  if (isUserLogin) {
    return <Navigate to="/main" />;
  }

  return <Outlet />;
};

export default PublicRoute;