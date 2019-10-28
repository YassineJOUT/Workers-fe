import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RegistrationForm from '../components/Registration/Form';

const Registration: React.SFC = () => (
	<Container>
        <Row style={{ marginTop : '100px'}}>
            <Col md={{ span: 4, offset: 4 }}>
                <RegistrationForm />
            </Col>
        </Row>
    </Container>
);

export default Registration;
