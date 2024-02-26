import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import ContentGear from '../content/contentGear';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F5F5F5', // Soft gray background color
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
  },
  margin: {
    marginTop: theme.spacing(8), // Adjust the top margin as needed
  },
}));

function Gear() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" className={classes.margin}>
        <Grid item xs={12} sm={8}>
          <ContentGear />
        </Grid>
      </Grid>
    </div>
  );
}

export default Gear;
