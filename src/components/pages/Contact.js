import React from 'react';
import { makeStyles, Typography, Card, CardContent, Grid, TextField, Button, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f0f0f0', // White background color
    minHeight: '100vh',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background color for the card
    padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(3),
    color: '#000000', // Title color is black
  },
  formLabel: {
    color: '#000000', // Form label color is black
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Card className={classes.card}>
          <CardContent>
            <Typography align="center" variant="h4" className={classes.title}>
              Contact Us
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField label="First Name" placeholder="Enter your first name" variant="outlined" fullWidth required InputLabelProps={{ className: classes.formLabel }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Last Name" placeholder="Enter your last name" variant="outlined" fullWidth required InputLabelProps={{ className: classes.formLabel }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" label="Email" placeholder="Enter your email address" variant="outlined" fullWidth required InputLabelProps={{ className: classes.formLabel }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Phone Number" placeholder="Enter your phone number" variant="outlined" fullWidth required InputLabelProps={{ className: classes.formLabel }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Enter a message" variant="outlined" fullWidth InputLabelProps={{ className: classes.formLabel }} />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" fullWidth className={classes.button}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Contact;
