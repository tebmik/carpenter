import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import { StyledPageWrapper, Typography } from "../styled";
import ButtonBase from '@material-ui/core/ButtonBase';

import Divide from "../../components/divider/DividerMargin";

// call to actions
import CallToAction from "../../components/buttons/Button";

//from material ui
// import Divider from '@material-ui/core/Divider';


const StyledWrapper = styled.div`
    min-height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    // padding: 2rem;

    @media only screen and (min-width: 769px) {
        text-align: start;
    }
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    
    @media only screen and (min-width: 769px) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
        column-gap: 10rem;
        align-items: start;
    }
`;

const ParaWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-self: start;
`;

const CallToActionWrapper = styled.div`
    max-width: 100%;
    max-height: auto;
    overflow: hidden;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;    

    & img {
        position: relative;
        max-width: 100%;
        max-height: auto;
        
        transition: all .3s ease-in-out;
        cursor: pointer;
    };
    & img:hover {
        opacity: 0.8;
        // transform: scale(1.1);
        // transform-origin: center;
    }

    @media only screen and (min-width: 769px) {
            justify-self: center;
            padding-top: 4rem;
        
    }
`;

const ImageContainer = styled.div`
    overflow: hidden;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

let title = {
    t1: "Duff's Capentry",
    t2: "Duff Job Handy People",
    subtitle: {
        sub1: "All your Carpentry & handy work needs catered for."
    }
};



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    focusVisible: {},
  }));
    

const About = () => {
    // console.log(titleSize)
    const classes = useStyles();
    return (
        <>
        <StyledPageWrapper id="aboutWrapper">
            <StyledWrapper id="aboutContent">
                <Divide margin="big" />
                <Typography size="title" font="roboto" weight="100" >{title.t2}</Typography>
                <Typography size="sub" font="roboto" weight="100" fontStyle="italic" >{title.subtitle.sub1}</Typography>
                <Divide margin="big" />
                <MainContent>
                    <ParaWrapper>
                        <Typography size="para" font="montserrat" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis justo vel ligula rutrum sollicitudin. Vivamus suscipit iaculis ligula. Donec facilisis ultricies imperdiet. Morbi convallis ante magna, eget pharetra nunc suscipit ut. Sed sed convallis ipsum. Etiam iaculis, est ac aliquam maximus, est ipsum condimentum lacus, eget commodo ante lorem ac orci. Vestibulum quis nulla porta, elementum turpis ut, rhoncus odio. 
                        </Typography>   
                        <Typography size="para" font="montserrat" margin="margin">
                            Cras ut gravida ipsum. Integer posuere lacus sed rutrum cursus. Phasellus aliquet ante ac vehicula posuere. Morbi dignissim lectus in velit luctus vehicula. Maecenas porta sapien dictum neque aliquet, ac gravida dolor auctor. Sed et convallis risus. Nam laoreet placerat dolor, eget elementum dolor facilisis eget
                        </Typography>
                    </ParaWrapper>
                    <CallToActionWrapper>
                        <ImageContainer>
                            <ButtonBase
                                focusRipple
                                focusVisibleClassName={classes.focusVisible}
                            >
                                <img src='images\clark-young-fQxMGkYXqFU-unsplash.jpg' alt="Our Work" />
                            </ButtonBase>
                        </ImageContainer>
                        <ButtonContainer>
                            <CallToAction title="Check Out Our Work" />
                        </ButtonContainer>
                    </CallToActionWrapper>
                </MainContent>
            </StyledWrapper>
        </StyledPageWrapper>
        </>
    );
};

export default About;