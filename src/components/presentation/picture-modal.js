import React from 'react';
import { map as _map } from 'lodash';
import { Col, Row, Button, Modal, ModalBody, Input } from 'reactstrap';

const closeBtn = (props) => {
    <button
        className="close"
        style={{
            position: 'absolute',
            top: '19px',
            right: '19px',
            color: 'white',
            fontSize: '3rem'
        }}
        onClick={props.closeModalHandler}
    >
        Close
    </button>
};

const PictureModal = (props) => {
    <>
        <Modal
            isOpen={props.show_modal}
            fade={false}
            className={props.className}
            centered={true}
            exterenal={closeBtn(props)}
        >
            <ModalBody className="modal-body">
                <Row>
                    <Col
                        className="media-wrapper"
                        md="7"
                    >
                        <div>
                            <img
                                className="image-modal"
                                src={props.post.Image}
                                alt=""
                            />
                        </div>
                    </Col>
                    <Col
                        className="info-wrapper modal-info-section"
                        md="5"
                    >
                    </Col>
                    <Row
                        className="user-info-modal">
                        <Col
                            xs="12"
                            md="8">
                            <h6 className="user-name">James Vinslet</h6>
                        </Col>
                        <Col
                            xs="1"
                            md="1">
                            <span
                                className="verified-badge d-flex"
                            />
                        </Col>
                    </Row>
                    <section
                        className="modal-info-section"
                        style={{ flex: 7, overFlow: 'auto' }}>
                        {_map(props.post.comments, (comments, index) => (
                            <div key={index}>{comments}</div>
                        ))}
                    </section>

                    <section className="modal-info-section f-1">
                        <div>
                            <span
                                className="empty-heart-badge heart-icon"
                                onClick={() => props.addLikeHandler(props.post.id)}
                            />
                            <strong>{props.post.likes} likes</strong>
                            <Button
                                color="danger"
                                size="sm"
                                style={{ marginLeft: '3em' }}
                                outline={true}
                                onClick={() => props.deletePostHandler(props.post.id)}
                            >
                                Delete
                            </Button>
                        </div>
                        <div>
                            Posted on: {' '}
                            <span className="muted-text">
                                {new Date(props.post.timestamp).toLocaleString()}
                            </span>
                        </div>
                    </section>
                    <section className="f-1">
                        <Input
                            placeholder="Add Comment"
                            onKeyPress={e => {
                                if (e.key === 'Enter') {
                                    props.addCommentHandler(props.post.id, e.target.value);
                                    e.target.value = '';
                                }
                            }} />
                    </section>
                </Row>
            </ModalBody>
        </Modal>
    </>
}

export default PictureModal;