import React from "react";
import shoppingCart from "./Cart"; 

const CartComponent = () => {
  const cartItems = shoppingCart.getItems();
  const totalPrice = shoppingCart.getTotalPrice();

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - {item.price}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default CartComponent;