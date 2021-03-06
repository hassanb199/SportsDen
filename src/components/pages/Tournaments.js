import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import ContentTournament from '../content/contentTournament';


const styles = makeStyles({
    margin:{
        paddingTop:'125px',
      
    },
    imgBackground:{
        backgroundImage:`url(${"/assets/backgroundSports.jpg"})`
    }
})

function Tournament() {
    const classes = styles();
    return (
        <div className={classes.imgBackground}>
        <Grid item container className={classes.margin}>
            <Grid item xs={0} sm={2}/>
            <Grid item xs={12} sm={8}>
               <ContentTournament/>
            </Grid>
            <Grid item xs={0} sm={2}/>
        </Grid>
        
    </div>
    )
}
export default Tournament
