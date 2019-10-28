import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

const LoginForm : React.FC = () => {
    return (
        <Form>
            <Form.Group  className='mt-4' controlId="formBasicEmail">
                <span className='pl-3 pt-1 position-absolute' >
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <Form.Control size="sm"  className="pl-5"  type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group  className='mt-4' controlId="formBasicPassword">
                <span className='pl-3 pt-1 position-absolute' >
                    <FontAwesomeIcon icon={faLock} />
                </span>
                <Form.Control size="sm"  className="pl-5"  type="password" placeholder="Password" />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                </Col>
                <Col>
                    <a href="/forgotten-password" className='float-sm-right' >Forgot password</a>
                </Col>
            </Row>
            <Button size="sm" className='mb-3 btn btn-primary btn-lg btn-block' variant="primary" type="submit">
                Log in
            </Button>
            <br />
            
            Or <a href="/register">Register now</a>
        </Form>
    );
};

export default LoginForm;
