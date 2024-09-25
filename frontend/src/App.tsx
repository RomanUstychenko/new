import React, { lazy, Suspense,useEffect,
  //  useState,  FC
   } from 'react';
   import { useDispatch } from 'react-redux';
   import { AppDispatch } from './redux/store';
import { Routes, Route } from "react-router-dom";
import './App.css';
import PrivateRoute from './components/routes/privateRoute/privateRoute';
import PublicRoute from './components/routes/publicRoute/publicRoute';
import { current } from './redux/auth/auth-operation';

const HomePage = lazy(() => import("./pages/homePage/homePage"));
const Login = lazy(() => import("./pages/login/loginForm"));
const Register = lazy(() => import("./pages/registration/registerForm"));
const Main = lazy(() => import("./pages/main/main"));
const App: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>(); // правильно типізуємо dispatch


  useEffect(() => {
  
    dispatch(current())
  }, [dispatch]);

  return (
    <div >
      <Suspense 
      // fallback={<Loader />}
      >
        <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<PrivateRoute />}>
          <Route path="/main" element={<Main />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;