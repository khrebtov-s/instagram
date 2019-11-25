// INSTA POSTS
import React from 'react'
import { map as _map, omit as _omit, find as _find } from 'lodash'

import { Container, Row, Button } from 'reactstrap'

import Post from './post-view'
import PictureModal from './picture-modal'

class PostsView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show_modal: false,
            show_upload_modal: false,
            current_post: false,
        }
    }

    showModal = post =>
        this.setState({
            show_modal: true,
            current_post: _omit(post, 'showUserModal'),
        })

    closeModal = () =>
        this.setState({
            show_modal: false,
        })

    showUploadModal = () =>
        this.setState({
            show_upload_modal: true,
        })

    closeUploadModal = () =>
        this.setState({
            show_upload_modal: false,
        })

    static getDerivedStateFromProps(props, state) {
        return Object.assign({}, state, {
            current_post:
                _find(props.posts, p => p.id === state.current_post.id) || {},
        })
    }

    addCommentHandler = (post_id, comment) =>
        this.props.addCommentHandler(post_id, comment)

    addLikeHandler = post_id => this.props.addLikeHandler(post_id)

    deletePostHandler = post_id => {

        this.props.deletePostHandler(post_id)

        this.closeModal()
    }

    addNewPostHandler = image_id => {
        this.props.addPostHandler(image_id)
        this.closeUploadModal()
    }

    render() {
        return (
            <Container className="Posts-view">
                <Button
                    color="primary"
                    outline
                    size="sm"
                    onClick={() => {
                        localStorage.clear()
                        window.location.reload()
                    }}
                >
                    Refresh
        </Button>
                <Row>
                    {_map(this.props.posts, (post, index) => (
                        <Post
                            key={index}
                            {...post}
                            showUserModal={post => {
                                this.showModal(post)
                            }}
                        />
                    ))}
                </Row>
                <PictureModal
                    show_modal={this.state.show_modal}
                    closeModalHandler={this.closeModal}
                    post={this.state.current_post}
                    addCommentHandler={this.addCommentHandler}
                    addLikeHandler={this.addLikeHandler}
                    deletePostHandler={this.deletePostHandler}
                />
            </Container>
        )
    }
}

export default PostsView
