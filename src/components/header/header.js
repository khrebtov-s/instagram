import React, { Copmonent } from 'react';
import logo from '../../img/logo.svg';
import './header.css';

export default class Header extends Copmonent {
    render() {
        return (
            <header>
                <div className="container h-flex">
                    <a href="#" className="logo">
                        <img src={logo} alt="logo" />
                    </a>
                    <nav>
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
        )
    }
}
