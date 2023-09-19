import React from "react"
import style from "./aboutus.module.css"

const AboutUs = () => {
    return (
        <div className={style["about-us-container"]}>
            <h1>About Us</h1>
            <p>Welcome to Foodit, your one-stop destination for satisfying your cravings with a wide range of delicious cuisines. We believe that good food has the power to bring people together and create memorable experiences.</p>

            <h2>Our Mission</h2>
            <p>Our mission is to provide a convenient and delightful food ordering experience for our customers. We aim to connect food enthusiasts with the finest local restaurants and bring their favorite dishes right to their doorstep.</p>

            <h2>Why Choose Foodit?</h2>
            <p>At Foodit, we're dedicated to ensuring that every meal you order is a delightful experience. Here's why you should choose us:</p>
            <p>Wide Range of Choices: From comfort food to exotic delights, our diverse selection caters to all tastes.</p>
            <p>Quick and Reliable: We prioritize timely delivery, so your food arrives fresh and piping hot.</p>
            <p>Quality Assurance: We partner with top-rated restaurants to guarantee the highest quality dishes.</p>
            <p>Easy Ordering: Our user-friendly app makes the ordering process a breeze, ensuring a hassle-free experience.</p>
        </div>
    )
}

export default AboutUs