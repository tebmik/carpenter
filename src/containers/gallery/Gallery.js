import React from "react";
import styled from "styled-components";
import { StyledPageWrapper, Typography } from "../styled";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Divide from "../../components/divider/DividerMargin";

//from material ui
import Divider from '@material-ui/core/Divider';

const StyledWrapper = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    text-align: center;    
    overflow: hidden;
    border-radius: 2rem;
    margin-top: 4rem;

    @media only screen and (min-width: 769px) {
        text-align: left
    }
`;

const TypographyWrapper = styled.div`
    margin-bottom: 4rem;
    text-align: center;

    @media only screen and (min-width: 769px) {
        text-align: right;
    };
`;


const Gallery = () => {
    return (
        <>
        <StyledPageWrapper>
            <StyledWrapper>
                <div>
                    <Divide margin="sml" />
                    <Typography size="title" color="darker" weight="100" font="roboto" margin="marginTop">
                        Some of our work
                    </Typography>
                    <Typography size="sub" color="darker" weight="400" font="roboto" fontStyle="italic">
                        Please scroll through some of our recent work.
                    </Typography>
                    <Divide margin="med" />
                </div>
                <Carousel 
                    showThumbs={false} 
                    infiniteLoop={true} 
                    useKeyboardArrows={true}
                    showStatus={false}
                    swipeable={true}  
                    emulateTouch={true}  
                    showArrows={false}
                    autoPlay={true}
                    stopOnHover={true}
                >
                    <div>
                        <img src="images/clark-young-fQxMGkYXqFU-unsplash.jpg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="images\todd-quackenbush-IClZBVw5W5A-unsplash.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="images/clark-young-fQxMGkYXqFU-unsplash.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </StyledWrapper>
        </StyledPageWrapper>
        </>
    );
};

export default Gallery;