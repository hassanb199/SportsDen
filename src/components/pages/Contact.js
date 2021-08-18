import React from 'react';
import { makeStyles, Typography, Card, CardContent, Grid, TextField } from '@material-ui/core';
import ButtonCustom from '../ButtonCustom';

const styles = makeStyles({
  title: {
    paddingTop: '10px'
  },
  imgBackground: {
    backgroundImage: `url(${"/assets/backgroundSports.jpg"})`,
    height: '100vh'
  }
})

function Contact() {
  const classes = styles();
  return (
    <div className={classes.imgBackground}>


      <Grid style={{ paddingTop: "120px" }}>
        <Card style={{ maxWidth: 450, margin: "0 auto" }}>
          <CardContent>
            <Typography align="center" gutterBottom className={classes.title} variant="h4">
              Contact Us
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField label="First Name" placeholder="Enter your first name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Last Name" placeholder="Enter your last name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" label="Email" placeholder="Enter your email address" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Phone Number" placeholder="Enter your phone number" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={3} placeholder="Enter your last name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <ButtonCustom txt="Submit" />
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>



    </div>
  )
}

export default Contact
