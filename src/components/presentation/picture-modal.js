import React, { useState } from 'react'
import { map as _map } from 'lodash'
import { Row, Col, Button, Modal, ModalBody, Input } from 'reactstrap'

const PictureModal = (props) => {
    const [activeLike, setActiveLike] = useState(false);

    const {
        addCommentHandler,
        addLikeHandler,
        closeModalHandler,
        deletePostHandler,
        post,
        show_modal
    } = props;


    let handleLike = () => {
        setActiveLike(true);
    };

    // const numberOfLikes = post.likes;

    // console.log('numberOfLikes', numberOfLikes);

    const externalCloseBtn = props => {
        return (
            <button
                className="close"
                style={{
                    position: 'absolute',
                    top: '2rem',
                    right: '12rem',
                    color: 'white',
                    fontSize: '3em',
                }}
                onClick={closeModalHandler}
            >
                x
      </button>
        );
    };

    return (
        <div>
            <Modal
                isOpen={show_modal}
                fade={false}
                className={props.className}
                centered={true}
                size="lg"
                external={externalCloseBtn(props)}
            >
                <ModalBody
                    style={{
                        display: 'flex',
                        flex: 1,
                        minHeight: '37em',
                    }}
                >
                    <Row>
                        <Col
                            md="7"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <div>
                                <img
                                    src={post.Image}
                                    style={{ display: 'flex', width: '100%' }}
                                    alt=""
                                />
                            </div>
                        </Col>

                        <Col
                            md="5"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                            className="modal-info-section"
                        >
                            <Row
                                style={{
                                    display: 'flex',
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <Col xs="12" md="8">
                                    <h6 className="user-name">Norman Kapoor</h6>
                                </Col>

                                <Col xs="1" md="1">
                                    <span
                                        className="verified-badge"
                                        style={{
                                            display: 'flex',
                                        }}
                                    />
                                </Col>
                                <Col xs="10" md="3">
                                    <span className="muted-text">Following</span>
                                </Col>
                            </Row>
                            <section
                                style={{ flex: 7, overflowY: 'auto' }}
                                className="modal-info-section"
                            >
                                {_map(post.comments, (c, index) => (
                                    <div key={index}>{c}</div>
                                ))}
                            </section>
                            <section style={{ flex: 1 }} className="modal-info-section">
                                <div>
                                    {console.log('activeLike', activeLike)}
                                    <span
                                        className={
                                            'heart' + ' ' + 'heart-btn' + ' ' +
                                            (post.like ? 'active-heart-badge' : 'empty-heart-badge')
                                        }
                                        onClick={() => {
                                            addLikeHandler(post.id)
                                            handleLike()
                                        }}
                                    />{' '}
                                    <strong>{post.likes} likes</strong>
                                    <Button
                                        color="danger"
                                        size="sm"
                                        style={{ marginLeft: '3em' }}
                                        outline
                                        onClick={() => deletePostHandler(post.id)}
                                    >
                                        Delete?
                </Button>{' '}
                                </div>
                                <div>
                                    Posted on:{' '}
                                    <span className="muted-text">
                                        {new Date(post.timestamp).toLocaleString()}
                                    </span>
                                </div>
                            </section>
                            <section style={{ flex: 1 }}>
                                <Input
                                    placeholder="Add Comment ..."
                                    // send comment by press enter
                                    onKeyPress={event => {
                                        if (event.key === 'Enter') {
                                            addCommentHandler(post.id, event.target.value)
                                            // clear input
                                            event.target.value = ''
                                        }
                                    }}
                                />
                            </section>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default PictureModal
