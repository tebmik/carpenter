import React from "react";
import Container from "../../containers/Container";
import NavContainer from "../navbar/navContainer/NavContainer";

const Layout = ({ children }) => {
    return (
        <>
            <NavContainer />
            <Container>{children}</Container>
        </>
    );
};

export default Layout;