import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { logoutUser } from '../../redux/auth/auth-operation';
    const Main: React.FC = () => {

      const dispatch = useDispatch<AppDispatch>(); // правильно типізуємо dispatch
      const onLogout = () => {
        dispatch(logoutUser());
        localStorage.clear();
      };
    return (
      <>
      <h1>main page</h1>

      <button type="button" onClick={onLogout}>Logout</button>
      </>
    );
  };

  export default Main;