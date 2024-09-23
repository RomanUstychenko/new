import { Navigate, Outlet } from 'react-router-dom';
import UseAuth from '../../hooks/useAuth';

const PublicRoute: React.FC = () => {
  const isUserLogin: boolean = UseAuth(); // Явна типізація як boolean

  if (isUserLogin) {
    return <Navigate to="/items" />;
  }

  return <Outlet />;
};

export default PublicRoute;