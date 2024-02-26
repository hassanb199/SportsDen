import React from 'react';
import { makeStyles, Typography, Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f0f0f0', // Light gray background color
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
  },
  card: {
    backgroundColor: '#ffffff', // White background color for the card
    maxWidth: 800,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow
  },
  media: {
    height: 300,
    backgroundSize: 'contain', // Fit the entire image without distortion
  },
  body: {
    textAlign: 'justify', // Justify text for better readability
    lineHeight: 1.8,
    marginTop: theme.spacing(2), // Add spacing between paragraphs
    color: '#333333', // Dark gray text color
  },

  body2: {
    textAlign: 'center', // Center text for better readability
    lineHeight: 1.8,
    marginTop: theme.spacing(2), // Add spacing between paragraphs
    color: '#333333', // Dark gray text color
},

  section: {
    marginTop: theme.spacing(3), // Add spacing between sections
  },
  teamMember: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  teamMemberImage: {
    width: 150, // Increase the width for bigger images
    height: 150, // Increase the height for bigger images
    marginRight: theme.spacing(2),
    objectFit: 'cover', // Maintain aspect ratio while filling the container
  },
  teamMemberText: {
    color: '#000000', // Black text color
  },
}));

function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title="About" />
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Typography variant="body1" style={{ fontStyle: 'italic' }} className={classes.body2}>
            "You miss 100 percent of the shots you don't take." - Wayne Gretzky
          </Typography>
        </div>
        <CardMedia className={classes.media} image={"/assets/about.jpg"} />
        <CardContent>
          <Typography variant="body1" className={classes.body}>
            Welcome to Sports Den! What is Sports Den you ask? Sports Den is an online platform where we offer upcoming and aspiring athletes an opportunity to enhance their performance
            and excel to levels beyond anyone’s comprehension. Sports Den offers coaching by some of the most famous athletes of all time including Lionel Messi, LeBron James, Wayne Gretzky,
            and many more. Sports Den also offers some basic equipment every athlete needs to excel in their respective sport. Once you are ready to make your mark on the world, Sports Den provides
            the opportunity to enter premium tournaments such as the FIFA World Cup, the Wimbledon Open, and many more.
          </Typography>
          <Typography variant="body1" className={classes.body}>
            At Sports Den, we believe in the saying “Believe and you shall achieve”. With the support of Sports Den, there is NOTHING stopping you from achieving new athletic heights in the sport you
            wish to excel at. One of our premium coaches, LeBron James said “Sports Den is the greatest of its kind in our generation and all future generations. I personally recommend it to all aspiring
            athletes”.
          </Typography>
          <Typography variant="body1" className={classes.body}>
            We are the first and ONLY online sports platform that has resources of this caliber. Just look at our coaches and you will know what I am talking about. We only offer the best of the
            best at competitive prices. So, what are you waiting for? Opportunity is knocking at your door! You just need to reach out and grab it!
          </Typography>

          {/* Additional Section - Team */}
          <div className={classes.section}>
            <Typography variant="h5">Meet Our Team</Typography>
            <div className={classes.teamMember}>
              <img src={"/assets/messi-team.jpg"} alt="Lionel Messi" className={classes.teamMemberImage} />
              <Typography variant="body1" className={classes.teamMemberText}>
                <strong>CEO and Coach:</strong> Lionel Messi
              </Typography>
            </div>
            <div className={classes.teamMember}>
              <img src={"/assets/hassan-team.jpg"} alt="Hassan Bajwa" className={classes.teamMemberImage} />
              <Typography variant="body1" className={classes.teamMemberText}>
                <strong>CTO:</strong> Hassan Bajwa
              </Typography>
            </div>
            <div className={classes.teamMember}>
              <img src={"/assets/ronaldo-team.jpg"} alt="Cristiano Ronaldo" className={classes.teamMemberImage} />
              <Typography variant="body1" className={classes.teamMemberText}>
                <strong>CFO and Coach:</strong> Cristiano Ronaldo
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default About;
