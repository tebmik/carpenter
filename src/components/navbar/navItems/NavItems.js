import React from "react";
import styled from "styled-components";

import NavItem from "./item/NavItem";

const StyledItems = styled.div`
    height: 100%;
    position: relative;
    display: grid;
    align-items: center;
    justify-content: end;
    grid-template-columns: ${({mobile}) => (mobile ? "1fr" : "1fr 1fr 1fr 1fr")};
`;

const NavItems = ({ mobile, clicked }) => {
    console.log(clicked);
    return (
        <>
            <StyledItems mobile={mobile}>
                <NavItem clicked={clicked} mobile={mobile} title="Home" />
                <NavItem clicked={clicked} mobile={mobile} title="About" />
                <NavItem clicked={clicked} mobile={mobile} title="Gallery" />
                <NavItem clicked={clicked} mobile={mobile} title="Contact" />
            </StyledItems>
        </>
    );
};

export default NavItems;