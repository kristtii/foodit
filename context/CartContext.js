import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
	return useContext(CartContext);
};

const isBrowser = typeof window !== "undefined";
const initialState = {
	items: isBrowser
		? JSON.parse(localStorage.getItem("cartItems")) || []
		: [],
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			return { ...state, items: [...state.items, action.payload] };
		case "CLEAR_CART":
			return { ...state, items: [] };
		default:
			return state;
	}
};


export const CartProvider = ({ children }) => {
	const [cartState, dispatch] = useReducer(cartReducer, initialState);

	useEffect(() => {
		if (isBrowser) {
			localStorage.setItem("cartItems", JSON.stringify(cartState.items));
		}
	}, [cartState.items]);

	return (
		<CartContext.Provider value={{ cartState, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};
