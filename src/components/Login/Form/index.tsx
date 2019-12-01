import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { login } from '../../../store/Login/actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import {history} from '../../../utilities/history';

interface ILoginProps{
    login: Function
}

interface ILoginStateProps {
    userInfo: any,
    isLoggedIn: boolean,
    error: string,
}

type IProps = ILoginProps & ILoginStateProps;

class LoginPage extends  Component<IProps> {

    handleSubmit = (event: React.FormEvent<HTMLFormElement> )=>{
        event.preventDefault();
        const emailField = document.querySelector('.email') as HTMLInputElement;
        let email: string = (emailField) ? emailField.value : '';

        const pwdFiled = document.querySelector('.pwd') as HTMLInputElement;
        let pwd: string = (pwdFiled) ? pwdFiled.value : '';
        if (!_.isEmpty(email) && !_.isEmpty(pwd)){
                this.props.login(email,pwd);
        }
    }
    render = () => {
        
        if( this.props !== null && this.props.isLoggedIn === true){
            history.push('/profile');
        }
        return (
            
            <Form onSubmit={this.handleSubmit}>
                {
                    (this.props && this.props.error !== '') ? <h2>ERROR</h2> : ''
                }

                <Form.Group className='mt-4' controlId="formBasicEmail">
                    <span className='pl-3 pt-1 position-absolute' >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <Form.Control size="sm" className="pl-5 email" type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className='mt-4' controlId="formBasicPassword">
                    <span className='pl-3 pt-1 position-absolute' >
                        <FontAwesomeIcon icon={faLock} />
                    </span>
                    <Form.Control size="sm" className="pl-5 pwd" type="password" placeholder="Password" />
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


const mapStateToProps = (login: ILoginStateProps) => ({
    userInfo: login.userInfo,
    isLoggedIn: login.isLoggedIn,
    error: login.error
});

const mapActionsToProps = { login };

export default connect(mapStateToProps, mapActionsToProps)(LoginPage);