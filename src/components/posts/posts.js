import React, { Component } from 'react';
import Post from '../post'

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post
                    src="https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg"
                    alt="text"
                />
            </div>
        );
    }
}