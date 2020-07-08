import React from "react";
import styled from "styled-components";

const StyledItem = styled.p`
    display: grid;
    justify-items: ${({mobile}) => (mobile ? "start" : "center")};
    font-size: 1.6rem;
    cursor: pointer;
    padding: 1rem 2rem;
`;

const NavItem = ({ title, mobile, clicked }) => {
    return (
        <>
            <StyledItem mobile={mobile} onClick={clicked}>
                {title}
            </StyledItem>
        </>
    );
};

export default NavItem;