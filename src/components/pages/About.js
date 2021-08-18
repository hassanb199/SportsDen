import React from 'react';
import { makeStyles, Typography, Card, CardHeader, CardMedia, CardContent, Grid } from '@material-ui/core';


const styles = makeStyles({
  root: {
    backgroundImage: `url(${"/assets/backgroundSports.jpg"})`,
    height: '100vh'
  },

  card: {
    paddingTop: '130px'
  },

  body: {
    textAlign: "left",
    paddingLeft: "80px",
    paddingRight: "80px"
  }

})


function About() {
  const classes = styles();
  return (
    <div className={classes.root}>

      <Grid item container>
        <Grid item xs={0} sm={3} />
        <Grid item xs={12} sm={6}>
          <Card className={classes.card} style={{ backgroundColor: "#28313b" }}>
            <CardHeader
              title="About"
            />
            <CardMedia style={{ height: "450px", width: "100%", margin: "auto", objectFit: 'cover', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} image={"assets/about.jpg"} />
            <CardContent>
              <Typography className={classes.body}>
                Welcome to Sports Den! What is Sports Den you ask? Sports Den is an online platform where we offer upcoming and aspiring athletes an opportunity to enhance their performance 
                and excel to levels beyond anyone’s comprehension. Sports Den offers coaching by some of the most famous athletes of all time including Lionel Messi, Lebron James, Wayne Gretzky, 
                and many more. Sports Den also offers some basic equipment every athlete needs to excel in their respective sport. Once you are ready to make your mark on the world, Sports Den provides 
                the opportunity to enter premium tournaments such as the FIFA world cup, the Wimbledon Open, and many more.
                <br></br>
              </Typography>
              <Typography className={classes.body}>
                <br></br>
                At Sports Den we believe in the saying “Believe and you shall achieve”. With the support of Sports Den there is NOTHING stopping you from achieving new athletic heights in the sport you 
                wish to excel at. One of our premium coaches, Lebron James said “Sports Den is the greatest of its kind in our generation and all future generations. I personally recommend it to all aspiring 
                athletes”.  
                <br></br> 
              </Typography>
              <Typography className={classes.body}>
                <br></br>
                We are the first and ONLY online sports platform that has resources of this caliber. Just look at our coaches and you will know what I am talking about. We only offer the best of the 
                best at competitive prices. So, what are you waiting for? Opportunity is knocking at your door! You just need to reach out and grab it!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={0} sm={3} />
      </Grid>

    </div>
  );

}

export default About;