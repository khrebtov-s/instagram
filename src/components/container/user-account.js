import React from 'react'
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { Container, Row, Col } from 'reactstrap'

import Home from './home'

// configure toast
toast.configure()

const Account = () => (
    <Container fluid className="App-Container">
        <Row className="App">
            <Home />
        </Row>
    </Container>
)

export default Account;