// cart.js

import React from "react";
import { useCart } from "../context/CartContext";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/navbar/Footer";

const CartPage = () => {
  const { cartState } = useCart();
  const cartItems = cartState.items;
  console.log(cartItems)

  return (
    <>
      <Navbar />
      <div>
        <h1>Shopping Cart</h1>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title} - {item.price}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
