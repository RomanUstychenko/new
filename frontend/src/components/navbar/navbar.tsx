import React from "react"
import { NavbarAuth } from "./navbarAuth/navbarAuth"
// import { NavbarStore } from "./navbarStore/navbarStore"
import { NavbarUser } from "./navbarUser/navbarUser"
import UseAuth from "../hooks/useAuth";

import { NavbarHeader } from "./navbar.styled";

export const Navbar: React.FC = () => {

    const isUserLogin: boolean = UseAuth();

    return (
        <NavbarHeader> {isUserLogin ? <NavbarUser /> : <NavbarAuth />}</NavbarHeader>
    )
}