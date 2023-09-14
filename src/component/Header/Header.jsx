import React from "react";
import css from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className={css.header}>
                <NavLink  className={css.link} to='/'>Home</NavLink>
                <NavLink to='/catalog'>Catalog</NavLink>
                <NavLink to='/favorites'>Favorites</NavLink>
            </nav>
        </div>
    )
};

export default Header;