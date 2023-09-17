import React from "react";
import css from "./Welcome.module.scss";
import { Link } from "react-router-dom";
import LogoSVG from '../../../public/car-rent.png';

const Welcome = () => {

    return (
        <div className={css.bg}>
            <h1 className={css.title}>Welcome to our car rental service!</h1>
            <div className={css.t}>
                <p className={`${css.subtitle} ${css.subtitle_1}`}>A wide range of cars</p>
                <p className={`${css.subtitle} ${css.subtitle_2}`}>Affordable prices</p>
                <p className={`${css.subtitle} ${css.subtitle_3}`}>Easy rental process</p>
                <p className={`${css.subtitle} ${css.subtitle_4}`}>Reliable and clean vehicles</p>
                <p className={`${css.subtitle} ${css.subtitle_5}`}>Flexible rental options</p>
            </div>
              <Link to="/catalog" className={css.link}>
                <p>Make your choice and hit the road with us!</p>
                <img className={css.img } src={LogoSVG} alt="logo" />
            </Link>
            
        </div>
    )
}
export default Welcome;