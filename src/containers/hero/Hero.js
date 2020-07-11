import React from "react";
import styled from "styled-components";
import { StyledPageWrapper, Typography } from "../styled";

import Heading from "./titleArea/Heading";

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
    height: 100vh;
    position: relative;
    
`;

const HeadingsContainer = styled.div`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    // padding: 2rem;
    height: 100%;
    display: flex;
    align-items: center;

    @media only screen and (min-width: 769px) {
        padding: 2rem;
    }
`;

const HeadingList = styled.div`
    display: flex;
    flex-direction: column;
`;

const Hero = () => {
    return (
        <>
            <StyledPageWrapper>
                <PageContent>
                    {/* <img src={process.env.PUBLIC_URL + 'images/todd-quackenbush-IClZBVw5W5A-unsplash.jpg'} alt="Duff" /> */}
                    <div className="parallax-img"></div>
                    <StyledHeading>
                        <HeadingsContainer>
                            <HeadingList>
                                <Heading title="Bathrooms" color="var(--color-white)" />
                                <Heading title="Kitchens" color="var(--color-white)" />
                                <Heading title="Extensions" color="var(--color-white)" />
                                <Heading title="Refurbishments" color="var(--color-white)" />
                                <Heading title="Gardens" color="var(--color-white)" />
                                <Typography color="white" size="subResponsive" fontWeight="400" margin>
                                    We’re a propery improvement business operating in Portugal, offering a wide range of services.
                                </Typography>
                            </HeadingList>
                        </HeadingsContainer>
                    </StyledHeading>
                </PageContent>
            </StyledPageWrapper>
        </>
    );
};

export default Hero;