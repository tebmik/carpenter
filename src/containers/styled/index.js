import styled from "styled-components";


export const StyledPageWrapper = styled.div`
    min-height: 100%;
    width: 100%;
    position: relative;
    // background-color: var(--color-main);
    margin: 0 auto;
`;


// elements

export const H1 = styled.h1`
    font-size: 3.4rem;
    color: ${({white}) => (
        white ? "var(--color-white)" : "var(--color-heading)"
    )}
`;

export const Typography = styled.p`
    font-size:${({size}) => {
        if(size === "titleResponsive") return "2.4rem";
        if(size === "subResponsive") return "2rem";
        if(size === "title") return "3.2rem";
        if(size === "sub") return "3rem";
        if(size === "para") return "1.6rem";
    }};
    color: ${({color}) => {
        if(color === "darker") return "var(--color-heading)";
        if(color === "dark") return "var(--color-text)";
        if(color === "white") return "var(--color-white)" 
    }}; 
    font-weight: ${({weight}) => {
        if(weight === "700") return "700"
        if(weight === "400") return "400";
        if(weight === "100") return "100";
    }};
    font-style: ${({fontStyle}) => {
        // if(fontStyle === "normal") return "normal";
        if(fontStyle === "italic") return "italic";
    }};
    margin: ${({margin}) => {
        if(margin === "margin") return "2rem 0rem";
        if(margin === "marginTop") return "4rem 0 0 0";
    }};
    font-family: ${({font}) => {
        if(font === "roboto") return "'Roboto', sans-serif";
        if(font === "montserrat") return "'Montserrat', sans-serif";
    }};
    line-height: 1.6;
    padding: 1rem;
    @media only screen and (min-width: 769px) {
        font-size:${({size}) => {
            if(size === "titleResponsive") return "3vw";
            if(size === "subResponsive") return "2.6vw";
        }};
        padding: 0;
    }
    @media only screen and (min-width: 1441px) {
        font-size:${({size}) => {
            if(size === "titleResponsive") return "4.3rem";
            if(size === "subResponsive") return "3.7rem";
        }};
        padding: 0;
    }
    
`;
 