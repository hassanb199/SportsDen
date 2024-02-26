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

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: 'auto',
    marginTop: theme.spacing(3),
    backgroundColor: '#ffffff', // Light gray background color
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Light shadow
    borderRadius: theme.spacing(1), // Add some border radius for a softer look
    transition: 'box-shadow 0.3s', // Smooth transition for hover effect
    '&:hover': {
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Slightly darker shadow on hover
    },
  },
  media: {  
    height: 0, // reset height  
    paddingTop: '56.25%', // 16:9 aspect ratio  
    backgroundSize: 'contain', // adjust background size  
  },  
  description: {
    color: '#000 !important', // Black text color
    marginTop: theme.spacing(1), // Add some top margin for spacing
  },
  subheader: {
    color: '#000', // Black color for subheader
    fontSize: '1.5rem', // Adjust subheader font size
    fontWeight: 'bold', // Make subheader bold
  },
  button: {
    backgroundColor: '#2a2a2a', // Amazon orange button color
    color: '#fff', // White button text color
    '&:hover': {
      backgroundColor: '#FF8C00', // Darker orange on hover
    },
  },
  starsContainer: {
    textAlign: 'center', // Center stars
    marginTop: theme.spacing(-5), // Reduce top margin for spacing
  },
  stars: {
    color: '#FFD700', // Golden star color
    marginRight: theme.spacing(0.5), // Add some right margin for spacing between stars
    fontSize: '2rem', // Increase star size
  },
  reviews: {
    color: '#888', // Gray color for reviews
    fontSize: '1rem', // Adjust reviews font size
  },
}));

function SimpleCard(props) {
  const classes = useStyles();
  const { title, subtitle, description, imgSrc, eventHandler } = props;

  // Function to generate stars
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i} className={classes.stars}>★</span>);
    }
    return stars;
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={imgSrc}
        title={title}
      />
      <CardContent>
        <CardHeader
          title={title}
          subheader={subtitle}
          classes={{ subheader: classes.subheader }} // Apply custom styles to subheader
        />
        <Typography variant="body2" className={classes.description} color="textPrimary">
          {description}
        </Typography>
      </CardContent>
      <div className={classes.starsContainer}>
        {renderStars()} {/* Render stars */}
      </div>
      <Typography variant="body2" className={classes.reviews}>
        10345 reviews
      </Typography>
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
