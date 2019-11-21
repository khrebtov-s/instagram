import React, { Component } from 'react';
import User from '../user';
import { InstaService } from '../../services';
import ErrorMessage from '../error';

export default class Users extends Component {
    InstaService = new InstaService();

    state = {
        error: false,
        users: []
    };

    componentDidMount() {
        this.updateUsers();
    };

    updateUsers() {
        this.InstaService.getAllPhotos()
            .then(this.onUsersLoaded)
            .catch(this.onError)
    };

    onError = () => {
        this.setState({
            error: true
        })
    };

    onUsersLoaded = (users) => {
        this.setState({
            error: false,
            users
        })
    };

    renderItems(arr) {
        return arr.map(item => {
            const { src, alt, name } = item;
            return (
                <User
                    src={src}
                    alt={alt}
                    name={name}
                />
            )
        })
    }

    render() {
        const { error, users } = this.state;

        if (error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(users);

        return (
            <div className="right">
                <div className="users__block">
                    {items}
                </div>
            </div>
        );
    };
};