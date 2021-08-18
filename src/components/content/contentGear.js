import React from 'react';
import SimpleCard from '../CardsTemplate';
import { Grid } from '@material-ui/core';


function ContentGear() {
    return (
        <Grid container spacing={2}>
            <Grid className="first" item xs={4}>
                <SimpleCard 
                title="Soccer Cleats" 
                subtitle="Price: $115" 
                imgSrc='assets/soccercleats.jpg' />
                
                
            </Grid>
            <Grid item xs={4}>
                <SimpleCard 
                title="Soccer Ball" 
                subtitle="Price: $50" 
                imgSrc='assets/soccerball.jpg'/>
            </Grid>
            <Grid item xs={4}>
                <SimpleCard 
                title="Badminton Racquet" 
                subtitle="Price: $80" 
                imgSrc='assets/badmintonracquet.jpg'/>
            </Grid>
            <Grid item xs={4}>
                <SimpleCard 
                title="Basketball" 
                subtitle="Price: $50" 
                imgSrc='assets/basketball.jpg'/>
            </Grid>
            <Grid item xs={4}>
                <SimpleCard 
                title="Tennis Racket" 
                subtitle="Price: $90" 
                imgSrc='assets/tennisracket.jpg'/>
            </Grid>
            <Grid item xs={4}>
                <SimpleCard 
                title="Cricket Bat" 
                subtitle="Price: $120" 
                imgSrc='assets/cricketbat.jpg'/>
            </Grid>
            <Grid item xs={4}>
                <SimpleCard 
                title="Squash Racquet" 
                subtitle="Price: $150" 
                imgSrc='assets/squashracquet.jpg'/>
            </Grid>
            <Grid item xs={4}>
                <SimpleCard 
                title="Hockey Stick" 
                subtitle="Price: $100" 
                imgSrc='assets/hockeystick.jpg'/>
            </Grid>
            <Grid item xs={4}>
                <SimpleCard 
                title="Running Shoes" 
                subtitle="Price: $150" 
                imgSrc='assets/runningshoes.jpg'/>
            </Grid>
        </Grid>
    )
}

export default ContentGear
