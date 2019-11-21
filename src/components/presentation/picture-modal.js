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
                    <Col>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
    </ModalBody>
}

export default PictureModal;