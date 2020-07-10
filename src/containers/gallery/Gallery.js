import React from "react";
import styled from "styled-components";
import { StyledPageWrapper, H1 } from "../styled";

const StyledWrapper = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
`;

const Gallery = () => {
    return (
        <>
        <StyledPageWrapper>
            <StyledWrapper>
                <H1>Gallery</H1>
            </StyledWrapper>
        </StyledPageWrapper>
        </>
    );
};

export default Gallery;