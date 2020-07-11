import React from "react";
import styled from "styled-components";

import { Typography } from "../../../containers/styled";

// MUI icon 
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const HeadinWrapper = styled.div`
    display: flex;
    color: var(--color-white);
`;

const IconWrapper = styled.div`
    height: 100%
    position: relative;
    display: flex;
    align-items: center;
    font-size: 3.2rem;
    margin-right: 2rem;
`;

const Heading = ({ title, color }) => {
    return (
        <HeadinWrapper>
            <IconWrapper>
                <DoneOutlineIcon fontSize="inherit" color="inherit" />
            </IconWrapper>
            <Typography size="titleResponsive" weight="700" color={color}>
                {title}
            </Typography>
        </HeadinWrapper>
    );
};

export default Heading;