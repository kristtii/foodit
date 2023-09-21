import React from "react";
import style from "./navbar.module.css";

const Navbar = () => {
    return (
        <nav>
            <div className={`${style["nav-bar"]} ${style["d-flex"]} ${style["align-center"]} ${style["justify-between"]} ${style["p-l-r"]}`}>
                <h2 className={style["nav-title"]}><a href='/'>foodit</a></h2>
                <div className={style["nav-elements"]}>
                <ul className={style["d-flex"]}> 
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/cart">Cart</a></li>
                    </ul>
                    {/* Mobile Dropdown */}
                    <select className={`${style["nav-dropdown"]} ${style["d-lg-none"]}`}>
                        <option value="/products">Products</option>
                        <option value="/about">About Us</option>
                        <option value="/contact">Contact Us</option>
                        <option value="/cart">Cart</option>
                    </select>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;