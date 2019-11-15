import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container h-flex">
                    <a href="#" className="logo">
                        <img src={logo} alt="logo" />
                    </a>
                    <nav className="links">
                        <ul>
                            <li>
                                <a href="#" className="menu_link">Лента</a>
                            </li>
                            <li>
                                <a href="#" className="menu_link">Профиль</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    };
};
