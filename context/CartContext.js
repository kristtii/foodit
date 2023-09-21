// CartContext.js
import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const initialState = {
  items: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log({...state, items: [...state.items, action.payload]})
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
