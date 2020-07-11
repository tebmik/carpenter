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

const NavItems = ({ mobile, clicked, white, dark, heavy, light }) => {
    return (
        <>
            <StyledItems mobile={mobile}>
                <NavItem 
                    heavy={heavy} 
                    light={light} 
                    white={white} 
                    dark={dark} 
                    clicked={clicked} 
                    mobile={mobile} 
                    title="Home" />
                <NavItem 
                    heavy={heavy} 
                    light={light} 
                    white={white} 
                    dark={dark} 
                    clicked={clicked} 
                    mobile={mobile} 
                    title="About" />
                <NavItem 
                    heavy={heavy} 
                    light={light} 
                    white={white} 
                    dark={dark} 
                    clicked={clicked} 
                    mobile={mobile} 
                    title="Gallery" />
                <NavItem 
                    heavy={heavy} 
                    light={light} 
                    white={white} 
                    dark={dark} 
                    clicked={clicked} 
                    mobile={mobile} 
                    title="Contact" />
            </StyledItems>
        </>
    );
};

export default NavItems;