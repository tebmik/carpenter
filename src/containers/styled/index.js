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

export const H2 = styled.h2``;

export const H3 = styled.h3``;

export const P = styled.p`
        font-size:${({title, subtitle, para}) => {
            if(title) return "3.2rem";
            if(subtitle) return "3rem";
            if(para) return "1.6rem";
        }};
        color: var(--color-hading);
        font-weight: ${({title, subtitle}) => {
            if(title) return "400";
            if(subtitle) return "thin";
        }};
        font-style: ${({normal, italic}) => {
            if(normal) return "normal";
            if(italic) return "italic";
        }};
        margin: ${({margin}) => {
            if(margin) return "2rem 0rem"
        }};

        font-family: "Roboto", sans-serif;
`;