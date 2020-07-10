import React from "react";
import styled from "styled-components";

import { H1 } from "../styled";

const StyledFoooter = styled.div`
    min-width: 100vw;
    width: 100%;
    min-height: 70vh;
    background-color: var(--color-heading);
    position: relative;
`;

const StyledContent = styled.div`
    max-width: 140rem;
    margin: 0 auto;
    padding: 2rem;
`;

const Footer = () => {
    return (
        <>
            <StyledFoooter>
                <StyledContent>
                    <H1 white >Footer</H1>
                </StyledContent>
            </StyledFoooter>
        </>
    );
};

export default Footer;