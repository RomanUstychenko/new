import React from "react"
import { NavLink } from 'react-router-dom';

export const NavbarAuth: React.FC = () => {

    return (
        <nav>
            <button><NavLink to={'/'}>Home</NavLink></button>
            <button><NavLink to={'/register'}>Registration</NavLink></button>
            <button><NavLink to={'/login'}>Login</NavLink></button>
        </nav>
    )
}