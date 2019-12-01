import React, { Component } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

class ResetPassword extends Component {
    render = () => {
        return (
            <Form>
            <Form.Group className='mt-4' controlId="formBasicPassword">
                <span className='pl-3 pt-1 position-absolute' >
                    <FontAwesomeIcon icon={faLock} />
                </span>
                <Form.Control size="sm" className="pl-5" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className='mt-4' controlId="formBasicPassword">
                <span className='pl-3 pt-1 position-absolute' >
                    <FontAwesomeIcon icon={faLock} />
                </span>
                <Form.Control size="sm" className="pl-5" type="password" placeholder="Password" />
            </Form.Group>
            <Button size="sm" className='mb-3 btn btn-primary btn-lg btn-block' variant="primary" type="submit">
                Reset Password
                        </Button>
        </Form>

    );
}
};

export default ResetPassword;