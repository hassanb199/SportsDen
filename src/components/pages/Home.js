import React from 'react';
import { makeStyles, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${"/assets/olympics.avif"})`,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden',
    color: '#fff', // Text color
    padding: theme.spacing(4),
  },
  logo: {
    height: '250px',
    marginBottom: theme.spacing(2),
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Transparent whitish background color
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
  },
  slogan: {
    fontSize: '2.5rem',
    marginBottom: theme.spacing(2),
    color: '#000', // Text color
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: theme.spacing(3),
    color: '#000', // Text color
  },
  exploreButton: {
    fontSize: '1.2rem',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={'assets/sportsdenlogo.png'} alt="Logo" className={classes.logo} />
      <div className={classes.overlay}>
        <Typography variant="h3" className={classes.slogan} gutterBottom>Welcome to Sports Den</Typography>
        <Typography variant="body1" className={classes.description} gutterBottom>
          Discover the thrill of sports with our premium collection.
        </Typography>
        <Button variant="contained" color="secondary" size="large" href="/about" className={classes.exploreButton}>
          Explore Now
        </Button>
      </div>
    </div>
  );
}

export default Home;
