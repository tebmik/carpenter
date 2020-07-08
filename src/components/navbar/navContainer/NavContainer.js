import React from "react";
import Navbar from "../Navbar"
import MobileNav from "../navContainer/mobileNav/MobileNav";


const NavContainer = () => {
    return (
        <>
            <MobileNav />
            <Navbar />
        </>
    );
};

export default NavContainer;