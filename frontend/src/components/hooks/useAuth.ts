// import { useSelector } from 'react-redux';
// import { selectIsLogin } from '../../redux/auth/auth-selector';

// const UseAuth = () => {
//   const result = useSelector(selectIsLogin);
//   return result;
// };

// export default UseAuth;


import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../redux/store'; // Переконайтеся, що імпортуєте тип кореневого стану
import { selectIsLogin } from '../../redux/auth/auth-selector';
console.log("selectIsLogin", selectIsLogin)
// Типізований хук useSelector
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const UseAuth = (): boolean => {
  const isLogin = useTypedSelector(selectIsLogin);
  console.log("isLogin", isLogin)
  return isLogin;
};

export default UseAuth;