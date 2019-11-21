import React, { useState, useEffect, useRef, createRef } from 'react';
import './search.css';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="LWmhU _0aCwM search">
            <input
                className="XTCLo x3qfX "
                type="text"
                placeholder="Поиск"
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                }}
            />
            <button
                type="submit"
                style={{
                    cursor: 'pointer',
                    border: 'none',
                    color: 'grey',
                    width: '28px',
                    height: '28px',
                    fontSize: '3rem',
                }}
                onClick={() => {
                    setSearchQuery('');
                    window.focus();
                    if (document.activeElement) {
                        document.activeElement.blur();
                    }
                }}
                className="coreSpriteSearchIcon"
            />
        </div>
    );
}

export default Search;