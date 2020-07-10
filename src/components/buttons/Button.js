import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const CallToAction = ({ title }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button style={{fontSize: "1.6rem"}} variant="outlined" color="primary">
                {title}
            </Button> 
        </div>
    );
  };

  export default CallToAction