import React from 'react';
import { useDispatch } from 'react-redux';


// Типізація для даних форми входу
interface LoginData {
    email: string;
    password: string;
  }
  
    const Login: React.FC = () => {
    const dispatch = useDispatch();
  
    // Типізуємо функцію onLogin
    const onLogin = (data: LoginData): void => {
    //   dispatch(login(data));
    };
  
    return (
      <div>
        <h1>
          Sign in please in your Menu
        </h1>
        
      </div>
    );
  };

  export default Login;