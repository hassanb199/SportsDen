import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardHeader, CardMedia } from '@material-ui/core';
import { Button } from '@material-ui/core';



const useStyles = makeStyles({

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9,
      marginTop: '100'
    }
  }
});

function clickMe() {
  alert('Added to Cart')
}
function SimpleCard(props) {
  const classes = useStyles();
  const { title, subtitle, description, imgSrc, id, price, eventHandler } = props;

  return (
    <Card style={{ backgroundColor: "#28313b" }}>
      <CardHeader
        title={title}
        subheader={subtitle}
      />
      <CardMedia style={{ height: "450px", width: "100%", margin: "auto", objectFit: 'cover', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} image={imgSrc} />
      <CardContent>
        <Typography>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={eventHandler} variant="contained" fullWidth color="secondary" >Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

export default SimpleCard;