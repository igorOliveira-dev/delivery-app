import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cartItens, setCartItens] = useState([]);
    const [cartPrice, setCartPrice] = useState(0);
  
    return (
      <CartContext.Provider value={[cartItens, setCartItens, cartPrice, setCartPrice]}>
        {children}
      </CartContext.Provider>
    );
  };