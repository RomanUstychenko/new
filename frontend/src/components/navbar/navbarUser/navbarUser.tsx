import React from "react"
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../../../redux/store";
import { logoutUser } from "../../../redux/auth/auth-operation";

export const NavbarUser: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>(); 

    const onLogout = () => {
        dispatch(logoutUser());
        localStorage.clear();
      };
    return (
        <nav>

<button type="button" onClick={onLogout}>Logout</button>
        </nav>
    )
}