import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import ContentTraining from '../content/contentTraining';


const styles = makeStyles({
    margin:{
        paddingTop:'125px'
    },
    imgBackground:{
        backgroundImage:`url(${"/assets/backgroundSports.jpg"})`
        
    }
})

function Training() {
    const classes = styles();
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
    )
}

export default Training
