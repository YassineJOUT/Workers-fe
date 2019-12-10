import React, { Component } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { signin } from "../../../store/Registration/actions";
import { ICredentials } from "../../../store/Registration/types";
import { connect } from "react-redux";
import { ApplicationState } from "../../../store";
import { Formik } from "formik";

interface ISignupProps {
  signin: Function;
}

interface ISignupStateProps {
  isLoading: boolean;
  error: string;
}

type IProps = ISignupProps & ISignupStateProps;

class RegistrationPage extends Component<IProps> {

  handleSubmit = (
    values: { username: string, email: string, password: string},
    {
      setSubmitting,
      resetForm
    }: { setSubmitting: Function; resetForm: Function }
  ) => {
    setSubmitting(true);
    const user: ICredentials = {
        email: values.email,
        username: values.username,
        password: values.password,
        id: ""
    };
    this.props.signin(user);
    setSubmitting(false);
  };

  render = () => {
    return (
      <Formik initialValues={{ username: "", email: "", password: "" }} onSubmit={this.handleSubmit}>
         {( {
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting
        }
         ) =>(

        
        <Form onSubmit={handleSubmit}>
          {this.props.error && (
              <Alert variant="danger">{this.props.error}</Alert>
              ) 
        }
          <Form.Group className="mt-4" controlId="formBasicText">
            <span className="pl-3 pt-1 position-absolute">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <Form.Control
              size="sm"
              className="pl-5 username"
              type="text"
              placeholder="Username"
              value={values.username}
              onBlur={handleBlur}
              onChange={handleChange}
              />
          </Form.Group>
          <Form.Group className="mt-4" controlId="formBasicEmail">
            <span className="pl-3 pt-1 position-absolute">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <Form.Control
              size="sm"
              className="pl-5 email"
              type="email"
              placeholder="Email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              />
          </Form.Group>
          <Form.Group className="mt-4" controlId="formBasicPassword">
            <span className="pl-3 pt-1 position-absolute">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <Form.Control
              size="sm"
              className="pl-5 pwd"
              type="password"
              placeholder="Password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              />
          </Form.Group>
          <Form.Group className="mt-4" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept All terms & conditions" />
          </Form.Group>
          <Button
              size="sm"
              className="mb-3 btn btn-primary btn-lg btn-block"
              variant="primary"
              type="submit"
              disabled={this.props.isLoading}
              >
                  {this.props.isLoading ? 
              <span>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                />
              Loading...
                </span>
           
           : 
              <span>
                Create account
              </span>
            
            }

          </Button>
        
          <br />
          Or <a href="/login  ">get connected</a>
        </Form>
         )}
      </Formik>
    );
  };
}

const mapStateToProps = ({ register }: ApplicationState) => ({
  isLoading: register.isLoading,
  error: register.error
});

const mapActionsToProps = { signin };

export default connect(mapStateToProps, mapActionsToProps)(RegistrationPage);
