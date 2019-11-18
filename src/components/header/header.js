import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import './header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container h-flex">
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo" />
                    </Link>
                    <nav className="links">
                        <ul>
                            <li>
                                <Link to="/" className="menu_link">Лента</Link>
                            </li>
                            <li>
                                <Link to="/profile" className="menu_link">Профиль</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    };
};
