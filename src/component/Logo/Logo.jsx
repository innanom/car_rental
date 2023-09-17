import React from 'react';
import { Link } from 'react-router-dom';
import css from './Logo.module.scss';
import LogoSVG from '../../../public/car-rent.png';

const Logo = () => {
    return (
        <div className={css.logo}>
            <Link to="/" className={css.logoLink}>
                <img className={css.img } src={LogoSVG} alt="logo" />
                <p>Car Rental</p>
            </Link>
        </div>
    )
}

export default Logo