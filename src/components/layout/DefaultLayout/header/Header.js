import React, { useState } from 'react';
import './header.scss';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <header className="header  ">
            <div className="header__left">
                <Link to="/">
                    <img
                        className="header__left__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="header__right">
                <div className="header__right__icon" onClick={handleClick}>
                    <div
                        className={
                            !click
                                ? 'header__right__icon__menu'
                                : 'header__right__icon__menu active'
                        }
                    ></div>
                </div>

                <ul
                    className={
                        !click
                            ? 'header__right__menu'
                            : 'header__right__menu active'
                    }
                >
                    <li className="header__right__menu__item">
                        <NavLink
                            to="/"
                            className="header__link"
                            activeclassname="active"
                            onClick={closeMobileMenu}
                        >
                            Pokedex{' '}
                        </NavLink>
                    </li>
                    <li className="header__right__menu__item">
                        <NavLink
                            to="/Berries"
                            className="header__link"
                            onClick={closeMobileMenu}
                        >
                            Berries{' '}
                        </NavLink>
                    </li>
                    <li className="header__right__menu__item">
                        <NavLink
                            to="/Items"
                            className="header__link"
                            onClick={closeMobileMenu}
                        >
                            Items
                        </NavLink>
                    </li>
                    {/* <li className="header__right__menu__item">
                        <NavLink to="/1" className="header__link">
                            Berries{' '}
                        </NavLink>
                    </li> */}
                </ul>
            </div>
        </header>
    );
};

export default Header;
