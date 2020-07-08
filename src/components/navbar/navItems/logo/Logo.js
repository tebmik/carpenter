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

const Logo = () => {
    return (
        <>
            <StyledLogo>
                Logo
            </StyledLogo>
        </>
    );
};

export default Logo;