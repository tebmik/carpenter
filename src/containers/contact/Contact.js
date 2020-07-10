import React from "react";
import styled from "styled-components";
import { StyledPageWrapper, H1 } from "../styled";

const StyledWrapper = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
`;

const Contact = () => {
    return (
        <>
        <StyledPageWrapper>
            <StyledWrapper>
                <H1>Contact</H1>
            </StyledWrapper>
        </StyledPageWrapper>
        </>
    );
};

export default Contact;