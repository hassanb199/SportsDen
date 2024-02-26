import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography 
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    backgroundColor: "#28313b",
    marginBottom: '20px',
  },
  media: {
    height: '200px', // Adjust height as needed
    backgroundSize: 'contain', // Ensure the image fits within the media container
  },
  description: {
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#f44336',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
  },
});

function SimpleCard(props) {
  const classes = useStyles();
  const { title, subtitle, description, imgSrc, eventHandler } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        title={title}
        subheader={subtitle}
      />
      <CardMedia 
        className={classes.media}
        image={imgSrc}
      />
      <CardContent>
        <Typography className={classes.description}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          onClick={eventHandler} 
          variant="contained" 
          fullWidth 
          className={classes.button}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default SimpleCard;
