import React, { lazy, Suspense,
  //  useState, useEffect, FC
   } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

const HomePage = lazy(() => import("./pages/homePage/homePage"));
const Login = lazy(() => import("./pages/login/loginForm"));
const Register = lazy(() => import("./pages/registration/registerForm"));

const App: React.FC = () => {
  return (
    <div >
      <Suspense 
      // fallback={<Loader />}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;