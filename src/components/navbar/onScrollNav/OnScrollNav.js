import React, { useState } from 'react';
import styled from "styled-components";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

// my Components
import Logo from "../navItems/logo/Logo";
import NavItems from "../navItems/NavItems";
import Hamburger from "../navContainer/mobileNav/hamburger/Hamburger";
import MobileDrawer from "../navContainer/mobileNav/drawer/MobileDrawer";

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 120rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    height: 100%;
    align-self: center;
`;

const MobileItems = styled.div`
    display: none;

    @media only screen and (min-width: 769px) {
        display: block;
    }
`;

const MobileHamburger = styled.div`
    display: block;

    @media only screen and (min-width: 769px) {
        display: none;
    }
`;

const ScrollNav = styled(AppBar)`
    background-color: rgba(225, 225, 225, 0.99) !important;
    min-height: 8rem;
    display: grid !important;
    align-items: center !important;
    z-index: 1001 !important;
`;

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={true} direction="lefdownt" in={trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props) {
    const [ opened, setOpened ] = useState(false);
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <ScrollNav>
          <Wrapper>
              <Logo dark heavy />
              <MobileItems>
                <NavItems dark heavy/>
              </MobileItems>
              <MobileHamburger>
                <Hamburger dark opened={opened} clicked={() => setOpened(!opened)}/>
              </MobileHamburger>
          </Wrapper>
        </ScrollNav>
      </HideOnScroll>
      <Toolbar />
      <MobileDrawer opened={opened} clicked={() => setOpened(false)} />
    </React.Fragment>
  );
}
