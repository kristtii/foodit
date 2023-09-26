import React from "react";
import { useCart } from "../../context/CartContext";
import Navbar from "../navbar/Navbar";
import Footer from "../navbar/Footer";
import style from "../../styles/Home.module.css";

const CartPage = () => {
    const { cartState, dispatch } = useCart();

    const { items: cartItems } = cartState;

    const handleCheckout = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    const calculateGroupedItems = () => {
        const groupedItems = {};
        cartItems.forEach((item) => {
            const key = item.title;
            if (groupedItems[key]) {
                groupedItems[key].count++;
                groupedItems[key].total += parseFloat(item.price.replace("$", ""));
            } else {
                groupedItems[key] = {
                    count: 1,
                    total: parseFloat(item.price.replace("$", "")),
                };
            }
        });
        return groupedItems;
    };

    const groupedItems = calculateGroupedItems();

    const calculateTotal = () => {
        let total = 0;
        for (const key in groupedItems) {
            total += groupedItems[key].total;
        }
        return total;
    };

    return (
        <>
            <Navbar />
            <div className={style["cart-container"]}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        {Object.keys(groupedItems).map((key, index) => (
                            <div key={index}>
                                {key} x {groupedItems[key].count} - ${groupedItems[key].total.toFixed(2)}
                            </div>
                        ))}
                        <hr />
                        <div>
                            <strong>Total:</strong> ${calculateTotal().toFixed(2)}
                        </div>
                        <button className={style["checkout"]} onClick={handleCheckout}>Checkout</button>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default CartPage;
