import React from 'react';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const MyButton = styled(Button)({
  background: '#FF9912',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});


function ButtonCustom(props) {
  return (
    <MyButton variant="contained">{props.txt}</MyButton>
  )
}

export default ButtonCustom

