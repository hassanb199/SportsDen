import React from 'react';
import SimpleCard from '../CardsTemplate';
import { Grid } from '@material-ui/core';


function ContentTournament() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <SimpleCard
                    title="FIFA World Cup 2022"
                    subtitle="Entry Fee: $1000"
                    imgSrc='assets/fifa.jpg' />
                

            </Grid>
            <Grid item xs={4}>
                <SimpleCard
                    title="ICC Cricket World Cup 2023"
                    subtitle="Entry Fee: $800"
                    imgSrc='assets/icc.png' />
            </Grid>
            <Grid item xs={4}>
                <SimpleCard
                    title="Stanley Cup 2022"
                    subtitle="Entry Fee: $600"
                    imgSrc='assets/stanley.jpg' />
            </Grid>
            <Grid item xs={4}>
                <SimpleCard
                    title="Wimbeldon Open 2022"
                    subtitle="Entry Fee: $300"
                    imgSrc='assets/wimbeldon.jpg' />
            </Grid>
            <Grid item xs={4}>
                <SimpleCard
                    title="NBA Championship 2022"
                    subtitle="Entry Fee: $1000"
                    imgSrc='assets/nba.jpg' />
            </Grid>
            <Grid item xs={4}>
                <SimpleCard
                    title="Rugby World Cup 2023"
                    subtitle="Entry Fee: $500"
                    imgSrc='assets/rugbycup.jpg' />
            </Grid>
        </Grid>
    )
}

export default ContentTournament
