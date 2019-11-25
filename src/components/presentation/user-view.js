// component to display user details
import React, { Fragment } from 'react'
import { toast } from 'react-toastify'

import { Container, Row, Col, Button } from 'reactstrap'

const User = props => (
    <Container>
        <Row>
            <header className="header-user">
                <section className="header-user-section">
                    <div className="profile-img-holder">
                        <img
                            alt=""
                            src={`${process.env.PUBLIC_URL}/images/0.jpg`}
                            style={{ width: '150px', height: '150px' }}
                        />
                    </div>
                </section>
                <section className="user-name_wrapper">
                    <Row
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                        }}
                    >
                        <Col xs="12" md="8">
                            <h5 className="user-name">
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        fontSize: '1.71rem',
                                    }}
                                >
                                    Norman Kapoor
                </a>
                            </h5>
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
                            <Button
                                outline
                                size="sm"
                                style={{
                                    color: '#fff',
                                    backgroundColor: '#6c757d',
                                    borderColor: '#6c757d',
                                }}
                            >
                                Following
              </Button>
                        </Col>
                    </Row>
                    <section
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                        }}
                    >
                        <span className="user-meta-info">
                            <strong>1207</strong> Posts
            </span>
                        <span className="user-meta-info">
                            <strong>25.7mn</strong> followers
            </span>
                        <span className="user-meta-info">
                            <strong>101</strong> following
            </span>
                    </section>
                    <Row
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                        }}
                    >
                        <Col xs="12" md="4">
                            <span className="muted-text">Followed by</span>
                        </Col>
                        <Col xs="12" md="4">
                            <span className="muted-text">+1 more</span>
                        </Col>
                    </Row>
                </section>
            </header>
        </Row>
    </Container>
);

export default User;

