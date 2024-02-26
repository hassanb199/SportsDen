import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import ContentTraining from '../content/contentTraining';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F5F5F5', // Soft gray color
    minHeight: '100vh', // Ensures the background covers the entire viewport height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
  },
  margin: {
    marginTop: theme.spacing(8), // Adjust the top margin as needed
  },
}));

function Training() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" className={classes.margin}>
        <Grid item xs={12} sm={8}>
          <ContentTraining />
        </Grid>
      </Grid>
    </div>
  );
}

export default Training;
