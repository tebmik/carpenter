import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1400px;
    height: calc(100% - 8rem);
    margin-top: 8rem;
    padding: 0rem 2rem;
`

const Container = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
};

export default Container;