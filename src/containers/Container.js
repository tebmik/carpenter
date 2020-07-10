import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 120rem;
    height: calc(100% - 8rem);
    padding: 2rem;
`

const Container = ({ children }) => {
    return (
        <Wrapper id="floatingBody">
            {children}
        </Wrapper>
    )
};

export default Container;