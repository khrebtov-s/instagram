import React from 'react';
import User from '../user';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Container, Row } from 'reactstrap';

toast.configure()

const Profile = () => {
    return (
        <Container fluid className="App-Container">
            <Row>
                <User
                    src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
                    alt="man"
                    name="Scott"
                    min
                />
            </Row>
        </Container>
    )
}

export default Profile;
