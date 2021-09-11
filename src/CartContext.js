import { React, Component, createContext, useState } from 'react';
import ContentGear from './components/content/contentGear';

const intialState = {
  name: 'Hassan Bajwa',
  price: 'hassan.b404@gmail.com'

};

export const CartContext = createContext({});

const Store = ({children}) => {
  const [state, setState] = useState(intialState);

  return (
    <CartContext.Provider value = {[state, setState]}>
      {children}
    </CartContext.Provider>
  )
}

export default Store;