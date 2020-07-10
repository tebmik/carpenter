import React, { useState } from "react";
import styled from "styled-components";

import Logo from "../../navItems/logo/Logo";
import Hamburger from "./hamburger/Hamburger";
import MobileDrawer from "./drawer/MobileDrawer";


const StyledMobile = styled.div`
    z-index: 1001;
    height: 8rem;
    width: 100%;
    background-color: transparent;
    display: block;
    position: absolute;
    top: 0;
    left: 0;

    @media only screen and (min-width: 769px) {
        display: none;
    }
`;

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    height: 100%;
    align-items: center;
`;


const MobileNav = () => {

    const [ opened, setOpened ] = useState(false);

    return (
        <>
            <StyledMobile>
                <Wrapper>
                    <Logo light white />
                    {/* <Hamburger white opened={opened} clicked={() => setOpened(!opened)} /> */}
                </Wrapper>
            </StyledMobile>
            <MobileDrawer opened={opened} clicked={() => setOpened(false)} />
        </>
    );
};

export default MobileNav;