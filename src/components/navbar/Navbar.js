import React from "react";
import styled from "styled-components";
import NavItems from "./navItems/NavItems";
import Logo from "./navItems/logo/Logo";

const StyledNav = styled.div`
    z-index: 1000;
    height: 8rem;
    width: 100%;
    background-color: transparent;
    display: none;
    position: absolute;
    top: 0;
    left: 0;

    @media only screen and (min-width: 769px) {
        display: block;
    }
`;


const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 120rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    height: 100%;
`;



const Navbar = ({ children }) => {
    return (
        <>
            <StyledNav id="navbar">
                <Wrapper>
                    <Logo white light/>
                    <NavItems white light />
                </Wrapper>
            </StyledNav>
        </>
    );
};

export default Navbar;