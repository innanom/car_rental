import React from "react";
import css from "./Welcome.module.scss";

const Welcome = () => {

    return (
        <div className={css.bg}>
            <h1>Welcome to our car rental service!</h1>
            <ul>
                <p>We offer:</p>
                <li>A wide range of cars</li>
                <li>Affordable prices</li>
                <li>Easy rental process</li>
                <li>Reliable and clean vehicles</li>
                <li>Flexible rental options</li>
            </ul>
            <p>Make your choice and hit the road with us!</p>
        </div>
    )
}
export default Welcome;