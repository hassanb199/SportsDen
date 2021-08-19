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
                imgSrc='assets/soccercleats.jpg'
                id='1' /> 
            
            </Grid>
            <Grid item xs={4}>
                <SimpleCard 
                title="Soccer Ball" 
                subtitle="Price: $50" 
                imgSrc='assets/soccerball.jpg'
                id='2'/>
            </Grid>
            <Grid item xs={4}>
                <SimpleCard 
                title="Badminton Racquet" 
                subtitle="Price: $80" 
                imgSrc='assets/badmintonracquet.jpg'
                id='3'/>
            </Grid>
            <Grid item xs={4}>
                <SimpleCard 
                title="Basketball" 
                subtitle="Price: $50" 
                imgSrc='assets/basketball.jpg'
                id='4'/>
            </Grid>
            <Grid item xs={4}>
                <SimpleCard 
                title="Tennis Racket" 
                subtitle="Price: $90" 
                imgSrc='assets/tennisracket.jpg'
                id='5'/>
            </Grid>
            <Grid item xs={4}>
                <SimpleCard 
                title="Cricket Bat" 
                subtitle="Price: $120" 
                imgSrc='assets/cricketbat.jpg'
                id='6'/>
            </Grid>
            <Grid item xs={4}>
                <SimpleCard 
                title="Squash Racquet" 
                subtitle="Price: $150" 
                imgSrc='assets/squashracquet.jpg'
                id='7'/>
            </Grid>
            <Grid item xs={4}>
                <SimpleCard 
                title="Hockey Stick" 
                subtitle="Price: $100" 
                imgSrc='assets/hockeystick.jpg'
                id='8'/>
            </Grid>
            <Grid item xs={4}>
                <SimpleCard 
                title="Running Shoes" 
                subtitle="Price: $150" 
                imgSrc='assets/runningshoes.jpg'
                id='9'/>
            </Grid>
        </Grid>
    )
}

export default ContentGear
