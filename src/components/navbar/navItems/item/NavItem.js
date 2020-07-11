import React from "react";
import styled from "styled-components";

// Mui components 
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const StyledItem = styled(ListItem)`
    width: 100%;
    display: grid;
    justify-items: ${({mobile}) => (mobile ? "start" : "center")};
    
    cursor: pointer;

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

`;


const theme = createMuiTheme({
    typography: {
        // Some CSS
        fontSize: 23,
        fontFamily: "'Montserrat',sans-serif"
    },
});



const NavItem = ({ title, mobile, clicked, white, dark, heavy, light }) => {
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
                            <Item inset={true} primary={title} />
                    </StyledItem>
                </List>
            </ThemeProvider>
   
        </>
    );
};

export default NavItem;