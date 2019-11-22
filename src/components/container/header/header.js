import React, { Component } from 'react';
import logo from '../../../img/logo.svg'
import logoText from '../../../img/instagram_logo.png';
import './header.css';
import { Link } from 'react-router-dom';
import Search from '../search';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container h-flex">
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo" />
                        <img src={logoText} alt="Instagram" style={{ width: '150px' }} />
                    </Link>
                    <Search />
                    <nav className="links">
                        <ul>
                            <li>
                                <Link to="/" className="menu_link">
                                    <h5 style={{ color: 'black' }}>Лента</h5>
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile" className="menu_link">
                                    <svg aria-label="Профиль" className="_8-yf5 "
                                        fill="#262626" height="24" viewBox="0 0 48 48"
                                        width="24">
                                        <g>
                                            <path d="M24 27c-7.1 0-12.9-5.8-12.9-12.9s5.8-13 12.9-13c7.1 0 12.9 5.8 12.9 12.9S31.1 27 24 27zm0-22.9c-5.5 0-9.9 4.5-9.9 9.9s4.4 10 9.9 10 9.9-4.5 9.9-9.9-4.4-10-9.9-10zM44 46.9c-.8 0-1.5-.7-1.5-1.5V42c0-5-4-9-9-9h-19c-5 0-9 4-9 9v3.4c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V42c0-6.6 5.4-12 12-12h19c6.6 0 12 5.4 12 12v3.4c0 .8-.7 1.5-1.5 1.5z"></path>
                                        </g>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    };
};
