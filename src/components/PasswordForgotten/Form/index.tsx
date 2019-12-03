import React, { Component } from 'react'
import { Form, Button, Alert, Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { ApplicationState } from '../../../store'
import { connect } from 'react-redux'
import { passwordForgotten } from '../../../store/PasswordForgotten/actions'
import _ from 'lodash';
interface IPFProps {
    passwordForgotten: Function
}

interface IPFStateProps {
    email: string;
    isLoggedIn: boolean;
    successMessage: string;
    isLoading: boolean;
    error: string;
}

type IProps = IPFProps & IPFStateProps;

class PasswordForgotten extends Component<IProps> {

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const emailFiled = document.querySelector('.email') as HTMLInputElement;
        let email: string = (emailFiled) ? emailFiled.value : '';
        const ConfirmationCodeFiled = document.querySelector('.confirmCode') as HTMLInputElement;
        let confirmationCode: string = (ConfirmationCodeFiled) ? ConfirmationCodeFiled.value : '';

        if (!_.isEmpty(confirmationCode)) this.props.passwordForgotten(this.props.email, confirmationCode)
        if (!_.isEmpty(email)) this.props.passwordForgotten(email);


    }

    alert = (alert: number) => {
        let alertInput = null;
        if (alert === 2)
            alertInput = (<div>
                <Alert variant='success'>
                    {this.props.successMessage}
                </Alert>
                <Form.Group className='mt-4' controlId="formBasicEmail">
                    <span className='pl-3 pt-1 position-absolute' >
                        <FontAwesomeIcon icon={faKey} />
                    </span>
                    <Form.Control size="sm" className="pl-5 confirmCode" type="text" placeholder="Confirmation code" />
                </Form.Group></div>)
        else if (alert === 1)
            alertInput = (<div>
                <Alert variant='danger'>
                    {this.props.successMessage}
                </Alert>
                <Form.Group className='mt-4' controlId="formBasicEmail">
                    <span className='pl-3 pt-1 position-absolute' >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <Form.Control size="sm" className="pl-5 email" type="email" placeholder="Email" />
                </Form.Group>
            </div>)
        else
            alertInput = <Form.Group className='mt-4' controlId="formBasicEmail">
                <span className='pl-3 pt-1 position-absolute' >
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <Form.Control size="sm" className="pl-5 email" type="email" placeholder="Email" />
            </Form.Group>

        return alertInput;
    }

    render = () => {

        let al = 0;
        al = (this.props !== null && this.props.error !== '') ? 1 : 0;
        al = (this.props !== null && this.props.successMessage !== undefined && this.props.successMessage !== '') ? 2 : 0;
       
        return (
            <Form onSubmit={this.handleSubmit}>
                {this.alert(al)}
                {this.props.isLoading ? 
                <Button size="sm" className='mb-3 btn btn-primary btn-lg btn-block' variant="primary" type="submit" disabled={this.props.isLoading}>
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
                    <Button size="sm" className='mb-3 btn btn-primary btn-lg btn-block' variant="primary" type="submit" disabled={this.props.isLoading}>
                    Recover password
                        </Button>
    }
                <br />
                Or <a href="/login">Back to login!</a>

            </Form>
        );
    }
};

const mapStateToProps = ({ login, passwordForgotten }: ApplicationState) => ({
    isLoggedIn: login.isLoggedIn,
    successMessage: passwordForgotten.successMessage,
    isLoading: passwordForgotten.isLoading,
    error: passwordForgotten.error,
    email: passwordForgotten.email
});

const mapDispatchToProps = { passwordForgotten }

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForgotten);