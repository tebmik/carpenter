import React from "react";
import styled from "styled-components";
import { StyledPageWrapper, H1 } from "../styled";

const PageContent = styled.div`
    background-image: url("https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1216&q=80");
    min-height: 100vh;
    width: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const StyledHeading = styled.div`
    background-color: rgba(0,0,0,0.3);
    padding: 3rem;
    // border-radius: 2rem;
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
`;


const Hero = () => {
    return (
        <>
            <StyledPageWrapper>
                <PageContent>
                    {/* <img src={process.env.PUBLIC_URL + 'images/todd-quackenbush-IClZBVw5W5A-unsplash.jpg'} alt="Duff" /> */}
                    <div className="parallax-img"></div>
                    <StyledHeading>
                        <H1 white>Duff / Job</H1>
                    </StyledHeading>
                </PageContent>
            </StyledPageWrapper>
        </>
    );
};

export default Hero;