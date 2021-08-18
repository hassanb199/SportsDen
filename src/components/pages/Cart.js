import React from 'react';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
    root: {
        backgroundImage:`url(${"/assets/homebackground.jpg"})`,
        height:'100vh',
        
    }
    
})

function Cart() {
    const classes = styles();
    const addToCart = document.getElementsByClassName('addToCart')
    function clickHandler() {
        console.log('Hello')
    }
    return (
        <div className={classes.root}>
            <addToCart onClick={clickHandler}></addToCart>
        </div>
    )
}

export default Cart

