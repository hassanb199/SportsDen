import React from 'react';
import { makeStyles, Button, Typography, Grid } from '@material-ui/core';

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
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Transparent whitish background color
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    scrollMarginBottom: theme.spacing(10),
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
  featuredItemsContainer: {
    marginTop: theme.spacing(3),
  },
  featuredItem: {
    backgroundColor: '#fff',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: '#000', // Text color
  },
}));

const FeaturedItem = ({ title, description }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4} className={classes.featuredItem}>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </Grid>
  );
};

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.overlay}>
        <Typography variant="h3" className={classes.slogan} gutterBottom>Welcome to SportsDen</Typography>
        <Typography variant="body1" className={classes.description} gutterBottom>
          Discover the thrill of sports with our premium collection.
        </Typography>
        <Button variant="contained" color="secondary" size="large" href="/about" className={classes.exploreButton}>
          Explore Now
        </Button>
      </div>
      <div className={classes.featuredItemsContainer}>
        {/* Here you can map through your featured items and render them using <FeaturedItem /> */}
      </div>
    </div>
  );
}

export default Home;
