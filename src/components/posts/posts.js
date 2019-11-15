import React, { Component } from 'react';
import Post from '../post';
import InstaService from '../../services';
import User from '../user';
import ErrorMessage from '../error';

export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
            .then(this.onPostsLoaded)
            .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const { name, altname, photo, src, alt, descr, id } = item;
            return (
                <div key={id} className="post">
                    <User
                        src={photo}
                        alt={altname}
                        name={name}
                        min
                    />
                    <img src={src} alt={alt} />
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
            );
        });
    }

    render() {
        const { error, posts } = this.state;
        const items = this.renderItems(posts)

        if (error) {
            return <ErrorMessage />
        }

        return (
            <div className="left">
                {items}
            </div>
        );
    }
}