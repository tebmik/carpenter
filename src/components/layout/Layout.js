import React from "react";
import Container from "../../containers/Container";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container>{children}</Container>
        </>
    );
};

export default Layout;