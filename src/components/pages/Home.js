import React from 'react';
import { makeStyles } from '@material-ui/core';


const styles = makeStyles({
    root: {
        backgroundImage:`url(${"/assets/homebackground.jpg"})`,
        height:'100vh',
        
    }
    
})


function Home()  {
    const classes = styles();
    return (
        <div className={classes.root}>
            <img src={'assets/sportsdenlogo.png'} style={{paddingTop:'350px', height:'250px'}}/>
        </div>
    );
    
}

export default Home;
