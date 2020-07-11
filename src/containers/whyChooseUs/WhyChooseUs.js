import React from "react";
import { Typography, StyledPageWrapper } from "../styled";

import Divide from "../../components/divider/DividerMargin";


// MUI icons 
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GroupIcon from '@material-ui/icons/Group';
import CodeIcon from '@material-ui/icons/Code';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


const Why = () => {
    return (
        <>
            <StyledPageWrapper>
                <Divide margin="big" />
                <Typography size="title" font="roboto" weight="100" color="dark" >
                    Why choose us?
                </Typography>
                <Divide margin="med" />
                <div style={{display: "flex"}}>
                    <BeachAccessIcon />
                    <Typography size="sub" font="montserrat" weight="300" color="darker">
                        We are fully Insured
                    </Typography>
                </div>
                <Divide margin="med" />
                <div style={{display: "flex"}}>
                    <ThumbUpIcon />
                    <Typography size="sub" font="montserrat" weight="300" color="darker">
                        Guarantee given with all work
                    </Typography>
                </div>
                <Divide margin="med" />
                <div style={{display: "flex"}}>
                    <AssignmentIcon />
                    <Typography size="sub" font="montserrat" weight="300" color="darker">
                        Free no obligation Quotes
                    </Typography>
                </div>
                <Divide margin="med" />
                <div style={{display: "flex"}}>
                    <GroupIcon />
                    <Typography size="sub" font="montserrat" weight="300" color="darker">
                        Polite and courteous team
                    </Typography>
                </div>
                <Divide margin="med" />
                <div style={{display: "flex"}}>
                    <CodeIcon />
                    <Typography size="sub" font="montserrat" weight="300" color="darker">
                        Extensive knowledge
                    </Typography>
                </div>
                <Divide margin="med" />
                <div style={{display: "flex"}}>
                    <AvTimerIcon />
                    <Typography size="sub" font="montserrat" weight="300" color="darker">
                        24 hours emergency help
                    </Typography>
                </div>
                <Divide margin="med" />
                <div style={{display: "flex"}}>
                    <CheckCircleOutlineIcon />
                    <Typography size="sub" font="montserrat" weight="300" color="darker">
                        City &amp; Guilds qualified
                    </Typography>
                </div>
                <Divide margin="med" />
                <div style={{display: "flex"}}>
                    <CheckBoxIcon />
                    <Typography size="sub" font="montserrat" weight="300" color="darker">
                        Checkatrade vetted
                    </Typography>
                </div>
                <Divide margin="med" />
            </StyledPageWrapper>
        </>
    );
};

export default Why;