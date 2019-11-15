import React from 'react';
import User from '../user';

export default function Users() {
    return (
        <div className="right">
            <User
                src="https://kidzartworx.com.au/wp-content/uploads/2017/01/circle-man.png"
                alt="logo"
                name="Garold"
            />
            <div className="users__block">
                <User
                    src="https://kidzartworx.com.au/wp-content/uploads/2017/01/circle-man.png"
                    alt="logo"
                    name="Garold"
                />
                <User
                    src="https://kidzartworx.com.au/wp-content/uploads/2017/01/circle-man.png"
                    alt="logo"
                    name="Garold"
                />
                <User
                    src="https://kidzartworx.com.au/wp-content/uploads/2017/01/circle-man.png"
                    alt="logo"
                    name="Garold"
                />
            </div>
        </div>
    );
}