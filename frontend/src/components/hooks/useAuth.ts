import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/auth-selector';

const UseAuth = () => {
  const result = useSelector(selectIsLogin);
  return result;
};

export default UseAuth;
