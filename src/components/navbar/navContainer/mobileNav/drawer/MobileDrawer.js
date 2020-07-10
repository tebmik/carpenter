import React from "react";
import styled from "styled-components";

import NavItems from "../../../navItems/NavItems";


const StyledDrawer = styled.div`
    border-top-right-radius: 2rem;
    z-index: 1000;
    position: fixed;
    top: 0;
    height: 100%;
    width: 70vw;
    background: gray;
    visibility: ${({opened}) => (opened ? "visible" : "hidden")};
    transform: translateX(${({opened}) => (opened ? "0" : "-70vw")});
    opacity: ${({opened}) => (opened ? "1" : "0")};
    transition: all 0.2s cubic-bezier(0.65, 0, 0.35, 1);
    box-shadow: ${(props) =>
        props.opened ? "10px 0 5px -2px rgba(225,225,225,.1)" : null};

    @media only screen and (min-width: 769px) {
        display: none;
    }
`;

const MobileDrawer = ({ opened, clicked }) => {
    return (
        <>
            <StyledDrawer opened={opened} >
                <NavItems white heavy mobile clicked={clicked} />
            </StyledDrawer>
        </>
    );
};

export default MobileDrawer;