import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <button><NavLink to={'/register'}>Registration</NavLink></button>
            <button><NavLink to={'/login'}>Login</NavLink></button>
        </div>
    );
};

export default HomePage;