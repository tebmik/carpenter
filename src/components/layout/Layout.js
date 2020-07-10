import React from "react";
import styled from "styled-components";
import Container from "../../containers/Container";
import NavContainer from "../navbar/navContainer/NavContainer";
import OnScrollNav from "../navbar/onScrollNav/OnScrollNav";

const StyledWrapper = styled.div`
    display: flex;
    justify-content: start;
    z-index: 500;
    min-height: 100vh;
    position: relative;
    margin: 0 auto;
    transform: translateY(-5%);
    background-color: var(--color-white);
    width: 100%;
    border-radius: 2rem;
    max-width: 85vw;
    box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20);

    @media only screen and (min-width: 769px) {
        max-width: 140rem;
        
    }
`;


const Layout = ({ children }) => {
    return (
        <>
            <NavContainer />
            <OnScrollNav />
            <StyledWrapper id="bodyWrapper">
                <Container>
                    {children}
                </Container>
            </StyledWrapper>
        </>
    );
};

export default Layout;