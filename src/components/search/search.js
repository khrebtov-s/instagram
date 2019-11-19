import React, { useState, useEffect, useRef, createRef } from 'react';
import './search.css';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const myInput = useRef();

    return (
        <div className="LWmhU _0aCwM">
            <input
                className="XTCLo x3qfX "
                type="text"
                id="myInput"
                placeholder="Поиск"
                value={searchQuery}
                inputRef={myInput}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                }}
            />
            <button
                type="submit"
                style={{
                    cursor: 'pointer',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.2rem',
                    background: 'none',
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