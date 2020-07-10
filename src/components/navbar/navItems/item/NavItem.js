import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styled from "styled-components";

const StyledItem = styled(ListItem)`
    width: 100%;
    display: grid;
    justify-items: ${({mobile}) => (mobile ? "start" : "center")};
    
    cursor: pointer;
    // padding: 1rem 2rem;
    color: ${({white, dark}) => {
        if(white) return "var(--color-white)";
        if(dark) return "var(--color-heading)";
    }} !important;
    font-weight: ${({heavy, light}) => {
        if(heavy) return "700";
        if(light) return "300";
    }} !important;
`;

const Item = styled(ListItemText)`
    font-size: 1.6rem; !important
`;


const theme = createMuiTheme({
    typography: {
        // Some CSS
        fontSize: "1.6rem",
    },
});



const NavItem = ({ title, mobile, clicked, white, dark, heavy, light }) => {
    // const classes = useStyles();
    return (
        <>
            <ThemeProvider theme={theme}>
            <List component="nav" aria-label="main menu">
                <StyledItem
                    button
                    heavy={heavy}
                    light={light} 
                    white={white} 
                    dark={dark} 
                    mobile={mobile} 
                    onClick={clicked}>
                        {/* <CssBaseline /> */}
                        <Item inset={true} primary={title} />
                </StyledItem>
            </List>
            </ThemeProvider>
   
        </>
    );
};

export default NavItem;