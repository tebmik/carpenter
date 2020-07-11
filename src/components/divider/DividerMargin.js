import React from "react";
import styled from "styled-components";
//from material ui
import Divider from '@material-ui/core/Divider';

const StyledDivide = styled.div`
    margin: ${({margin}) => {
        if(margin === "big") return "3rem 0";
        if(margin === "med") return "2rem 0";
        if(margin === "sml") return "1rem 0";
    }};
    padding: 0 1rem;
`;

const Divide = ({ margin }) => {
    return (
        <StyledDivide margin={margin}>
            <Divider />
        </StyledDivide>
    );
};

export default Divide