import React, { Component } from 'react';
import User from '../user';

export default class Post extends Component {
    render() {
        const { src, alt } = this.props;
        return (
            <div className="post">
                <User
                    src="https://kidzartworx.com.au/wp-content/uploads/2017/01/circle-man.png"
                    alt="logo"
                    name="Garold"
                    min
                />
                <img src={src} alt={alt} />
                <div className="post__name">
                    Some account
            </div>
                <div className="post__descr">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro consequatur sit qui fugiat nulla quaerat officia ad quae voluptas voluptatum?
            </div>
            </div>
        );
    }
}
