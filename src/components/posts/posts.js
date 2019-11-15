import React, { Component } from 'react';
import Post from '../post'
import InstaService from '../../services'

export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }

    updatePosts() {
        this.InstaService.getAllPosts()
            .then()
            .catch();
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        })
    }

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