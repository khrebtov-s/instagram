import React, { Component } from 'react';
import { map as _map, omit as _omit, find as _find } from 'lodash';

import { Container, Row, Button } from 'reactstrap';

import Post from './post-view';
import PictureModal from './UserPictureModalView';
import UploadModal from './UploadModalView';

export default class PostsView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show_modal: false,
            show_upload_modal: false,
            current_post: false
        }
    };

    showModal = (post) => {
        this.setState({
            show_modal: true,
            current_post: _omit(post, 'showUserModal')
        })
    };

    closeModal = () => {
        this.setState({
            show_modal: false
        })
    };

    showUploadModal = () => {
        this.setState({
            show_upload_modal: false
        })
    };

    static getDriverdStateFormProps(props, state) {
        return Object.assign({}, state, {
            current_post:
                _find(props.posts, p => p.id === state.current_post)
        })
    };

    addCommentHandler = (post_id, comment) => {
        this.props.addCommentHandler(post_id, comment);
    };

    addLikeHandler = (post_id) => {
        this.props.addLikeHandler(post_id);
    };

    deletePostHandler = (post_id) => {
        this.props.deletePostHandler(post_id);
        this.closeModal();
    };

    addNewPostHandler = (image_id) => {
        this.props.addPostHandler(image_id);
        this.closeUploadModal();
    };

    renderPosts = () => {
        return _map(this.props.posts, (post, index) => {
            <Post
                key={index}
                {...post}
                showUserModal={(post) => {
                    this.showModal(post)
                }}
            />
        })
    };

    render() {
        return (
            <Container className="post-view">
                <Button>
                    Refresh
                </Button>
                <Row>
                    {renderPosts}
                </Row>
            </Container>
        );
    };



}