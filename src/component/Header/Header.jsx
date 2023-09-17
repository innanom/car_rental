import React from "react";
import css from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import Logo  from "../Logo/Logo"

const Header = () => {
    return (
        <div className={css.header}>
            <Logo/>
            <nav className={css.nav}>
                <NavLink  className={css.link} to='/'>Home</NavLink>
                <NavLink className={css.link} to='/catalog'>Catalog</NavLink>
                <NavLink className={css.link} to='/favorites'>Favorites</NavLink>
            </nav>
        </div>
    )
};

export default Header;