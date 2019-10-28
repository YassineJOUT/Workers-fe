import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../components/Login/Form';

const Login: React.SFC = () => (
	<Container>
        <Row style={{ marginTop : '100px' }}>
            <Col md={{ span: 4, offset: 4 }}>
                <LoginForm />
            </Col>
        </Row>
    </Container>
);

export default Login;
