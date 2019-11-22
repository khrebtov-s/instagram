import React, { Component } from 'react';

import { Col, Card, CardText, CardImg, CardImgOverlay } from 'reactstrap';

export default class PostView ectends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_info: false
        }
    };

    render(){
        const { props } = this;
        return (
            <Col
                xs="6"
                md="4"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItem: 'center',
                    padding: '1rem'
                }}
            >
                <Card
                    inverse
                    onMouseEnter={() => this.setState({ show_info: true })}
                    onMouseLeave={() => this.setState({ show_info: false })}
                    onClick={() => this.props.showUserModal(this.props)}
                >
                    <CardImg width="100%" src={props.Image} alt="Card image cap" />
                    <CardImgOverlay
                        style={{
                            visibility: this.state.show_info ? 'visible' : 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgb(0, 0, 0, 0.3)',
                            color: 'white'
                        }}
                    >
                        <CardText>
                            <span className="d-flex">
                                <span className="heart-badge" />
                                {props.likes}
                            </span>
                        </CardText>
                    </CardImgOverlay>
            </Col>
                );
            };
};