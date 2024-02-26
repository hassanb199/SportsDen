import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import ContentTraining from '../content/contentTraining';

const useStyles = makeStyles({
    margin: {
        paddingTop: '125px'
    },
    imgBackground: {
        backgroundColor: '#F5F5F5', // Soft gray color
        minHeight: '100vh', // Ensures the background covers the entire viewport height
    }
});

function Training() {
    const classes = useStyles();
    return (
        <div className={classes.imgBackground}>
            <Grid item container className={classes.margin}>
                <Grid item xs={0} sm={2}/>
                <Grid item xs={12} sm={8}>
                    <ContentTraining/>
                </Grid>
                <Grid item xs={0} sm={2}/>
            </Grid>
        </div>
    );
}

export default Training;
