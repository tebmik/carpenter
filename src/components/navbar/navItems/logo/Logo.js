import React from "react";
import styled from "styled-components";


const StyledLogo = styled.p`
    height: 100%;
    position: relative;
    display: grid;
    align-items: center;
    font-size: 1.6rem;
    padding: 1rem 2rem;
`;
    
const P = styled.p` 
    color: ${({white, dark}) => {
        if(white) return "var(--color-white)";
        if(dark) return "var(--color-heading)";
    }};
    font-weight: ${({heavy, light}) => {
        if(heavy) return "700";
        if(light) return "400";
    }};
`;

const Logo = ({ white, dark, heavy, light }) => {
    return (
        <>
            <StyledLogo>
                <P heavy={heavy} light={light} white={white} dark={dark} >Logo</P>
            </StyledLogo>
        </>
    );
};

export default Logo;