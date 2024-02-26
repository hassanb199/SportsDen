import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core';
import { CartContext } from '../../CartContext';

const styles = makeStyles({
  root: {
    backgroundColor: '#F5F5F5', // Soft gray background color
    minHeight: '100vh',

  }

})

function Cart() {
  const classes = styles();
  const [state, setState] = useContext(CartContext);
  
  return (
    <div className={classes.root} style={{paddingTop:"100px"}}>
      <p>Name: {state.name}</p>
      <p>price: {state.price}</p>
    </div>
  )
}

export default Cart

