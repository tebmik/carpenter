import React from "react";
import styled from "styled-components";
import NavItems from "./navItems/NavItems";
import Logo from "./navItems/logo/Logo";

const StyledNav = styled.div`
    height: 8rem;
    width: 100%;
    background-color: gray;
    display: none;
    position: fixed;
    top: 0;
    left: 0;

    @media only screen and (min-width: 769px) {
        display: block;
    }
`;


const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    height: 100%;
`



const Navbar = ({ children }) => {
    return (
        <>
            <StyledNav id="navbar">
                <Wrapper>
                    <Logo />
                    <NavItems />
                </Wrapper>
            </StyledNav>
        </>
    );
};

export default Navbar;