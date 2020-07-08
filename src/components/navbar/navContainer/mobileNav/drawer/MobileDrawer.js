import React from "react";
import styled from "styled-components";

import NavItems from "../../../navItems/NavItems";


const StyledDrawer = styled.div`
    position: fixed;
    height: 100%;
    width: 70vw;
    background-color: var(--color-text);
    visibility: ${({opened}) => (opened ? "visible" : "none")};
    transform: translateX(${({opened}) => (opened ? "0" : "-70vw")});
    opacity: ${({opened}) => (opened ? "1" : "0")};
    transition: all 0.2s cubic-bezier(0.65, 0, 0.35, 1);

    @media only screen and (min-width: 769px) {
        display: none;
    }
`;

const MobileDrawer = ({ opened, clicked }) => {
    return (
        <>
            <StyledDrawer opened={opened} >
                <NavItems mobile clicked={clicked} />
            </StyledDrawer>
        </>
    );
};

export default MobileDrawer;