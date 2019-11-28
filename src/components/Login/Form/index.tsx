import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { ApplicationState } from '../../../store';
import { userLogin } from '../../../store/Login/actions';
import { connect } from 'react-redux';
import { UserLogin } from '../../../store/types';

interface ILoginProps{
    email?: string,
    password?: string,
    userLogin: Function
}

class LoginPage extends  Component<ILoginProps> {

    handleSubmit = (event: React.FormEvent<HTMLFormElement> )=>{
        event.preventDefault();
        const user : UserLogin = {
            email : 'yassinejout@gmail.com',
            password : 'yassine'
        };
        this.props.userLogin(user);
        console.log('Action fired');
    }

    render = () => {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className='mt-4' controlId="formBasicEmail">
                    <span className='pl-3 pt-1 position-absolute' >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <Form.Control size="sm" className="pl-5" type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className='mt-4' controlId="formBasicPassword">
                    <span className='pl-3 pt-1 position-absolute' >
                        <FontAwesomeIcon icon={faLock} />
                    </span>
                    <Form.Control size="sm" className="pl-5" type="password" placeholder="Password" />
                </Form.Group>
                <Row >
                    <Col >
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                    </Col>
                    <Col >
    
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
    }
    
};


const mapStateToProps = ({user}: ApplicationState) => ({
    details: user.details,
    connected: user.connected,
    error: user.error
});

const mapActionsToProps = { userLogin };

export default connect(mapStateToProps, mapActionsToProps)(LoginPage);