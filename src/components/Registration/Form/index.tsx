import React, { Component } from 'react'
import { Form, Button, Spinner, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { signin } from '../../../store/Registration/actions';
import { ICredentials } from '../../../store/Registration/types';
import { connect } from 'react-redux';
import _ from 'lodash';

interface ISignupProps  {
    signin: Function
}

interface ISignupStateProps {
    isRegistring: boolean,
    error: string,
}

type IProps = ISignupProps & ISignupStateProps;

class RegistrationPage extends Component<IProps> {

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        

        const emailField = document.querySelector('.email') as HTMLInputElement;
        let email: string = (emailField) ? emailField.value : '';

        const pwdField = document.querySelector('.pwd') as HTMLInputElement;
        let pwd: string = (pwdField) ? pwdField.value : '';

        const usernameField = document.querySelector('.username') as HTMLInputElement;
        let username: string = (usernameField) ? usernameField.value : '';

        const user: ICredentials = {
            email: email,
            username: username,
            password: pwd,
            id: ''
        }

        if (!_.isEmpty(email) && !_.isEmpty(pwd)){
                this.props.signin(user);
        }
    }

    render = ()  => {
        return (
            <Form onSubmit={this.handleSubmit}>
                {
                    (this.props && this.props.error !== '') ? <Alert variant='danger'>
                        {this.props.error}
                    </Alert> : ''
                }
                <Form.Group className='mt-4' controlId="formBasicText">
                    <span className='pl-3 pt-1 position-absolute' >
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    <Form.Control size="sm" className="pl-5 username" type="text" placeholder="Username" />


                </Form.Group>
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
                <Form.Group className='mt-4' controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept All terms & conditions" />
                </Form.Group>
                {this.props.isRegistring ? 
                <Button size="sm" className='mb-3 btn btn-primary btn-lg btn-block' variant="primary" type="submit" disabled={this.props.isRegistring}>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                        </Button>
                    : 
                    <Button size="sm" className='mb-3 btn btn-primary btn-lg btn-block' variant="primary" type="submit" disabled={this.props.isRegistring}>
                    Create account
                        </Button>
    }
                <br />

                Or <a href="/login  ">get connected</a>
            </Form>

        );
    }
};

const mapStateToProps = (signin: ISignupStateProps) => ({
    isRegistring: signin.isRegistring,
    error: signin.error,
});

const mapActionsToProps = { signin };


export default connect(mapStateToProps, mapActionsToProps)(RegistrationPage);
