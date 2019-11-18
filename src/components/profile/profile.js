import React from 'react';
import User from '../user';
import Palette from '../palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User
                src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
                alt="man"
                name="Scott"
                min
            />
            <Palette />
        </div>
    )
}

export default Profile;
