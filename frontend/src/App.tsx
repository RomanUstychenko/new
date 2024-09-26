import React, { lazy, Suspense,useEffect,
  //  useState,  FC
   } from 'react';
   import { useDispatch } from 'react-redux';
   import { AppDispatch } from './redux/store';
import { Routes, Route, useNavigate  } from "react-router-dom";
import './App.css';
import PrivateRoute from './components/routes/privateRoute/privateRoute';
import PublicRoute from './components/routes/publicRoute/publicRoute';
import { current } from './redux/auth/auth-operation';
import { fetchMainCatalog } from './redux/catalog/catalog-operation';

const HomePage = lazy(() => import("./pages/homePage/homePage"));
const Login = lazy(() => import("./pages/login/loginForm"));
const Register = lazy(() => import("./pages/registration/registerForm"));
const Main = lazy(() => import("./pages/main/main"));
const App: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>(); // правильно типізуємо dispatch
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(current()).unwrap().catch(() => {
        localStorage.removeItem('token');  // Видаляємо токен, якщо він недійсний
        // navigate('/');  // Перенаправляємо на сторінку логіну
      });
      dispatch(fetchMainCatalog());
    }
  }, [dispatch, navigate]);

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