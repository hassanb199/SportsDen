import React from 'react';
import SimpleCard from '../CardsTemplate';
import { Grid } from '@material-ui/core';


function ContentTraining() {
  function eventHandler2() {
    alert("Lionel Messi")
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <SimpleCard
          title="Lionel Messi"
          subtitle="Coaching Rate: $100,000/hr"
          imgSrc='assets/messi.jpg'
          eventHandler={eventHandler2}/>

      </Grid>
      <Grid item xs={4}>
        <SimpleCard
          title="Lin Dan"
          subtitle="Coaching Rate: $45,000/hr"
          imgSrc='assets/lindan.jpg' />
      </Grid>
      <Grid item xs={4}>
        <SimpleCard
          title="Lebron James"
          subtitle="Coaching Rate: $30,000/hr"
          imgSrc='assets/lebron.jpg' />
      </Grid>
      <Grid item xs={4}>
        <SimpleCard
          title="Jahangir Khan"
          subtitle="Coaching Rate: $10,000/hr"
          imgSrc='assets/jahangir.jpg' />
      </Grid>
      <Grid item xs={4}>
        <SimpleCard
          title="Rafael Nadal"
          subtitle="Coaching Rate: $5,000/hr"
          imgSrc='assets/nadal.jpg' />
      </Grid>
      <Grid item xs={4}>
        <SimpleCard
          title="Andre De Grasse"
          subtitle="Coaching Rate: $10,000/hr"
          imgSrc='assets/grasse.jpg' />
      </Grid>
      <Grid item xs={4}>
        <SimpleCard
          title="Eluid Kipchoge"
          subtitle="Coaching Rate: $11,000/hr"
          imgSrc='assets/eluid.jpg' />
      </Grid>
      <Grid item xs={4}>
        <SimpleCard
          title="Shoaib Akhtar"
          subtitle="Coaching Rate: $30,000/hr"
          imgSrc='assets/shoaib.jpg' />
      </Grid>
      <Grid item xs={4}>
        <SimpleCard
          title="Wayne Gretzky"
          subtitle="Coaching Rate: $10,000/hr"
          imgSrc='assets/wayne.jpg' />
      </Grid>
    </Grid>
  )
}

export default ContentTraining
