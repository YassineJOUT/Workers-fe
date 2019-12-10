import React, { Component } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { resetPassword } from "../../../store/ResetPassword/actions";
import { ApplicationState } from "../../../store";
import { connect } from "react-redux";
import { Formik } from "formik";
import { Error } from "../../Error";

interface IResetPasswordProps {
  resetPassword: Function;
}
interface IResetPasswordStateProps {
  isLoading: boolean;
  error: string;
  successMessage: string;
  email: string;
  confirmationCode: string;
}

type IProps = IResetPasswordProps & IResetPasswordStateProps;

class ResetPassword extends Component<IProps> {

  handleSubmit = (
    values: {  password1: string,password: string},
    {
      setSubmitting,
      resetForm
    }: { setSubmitting: Function; resetForm: Function }
  ) => {
    setSubmitting(true);
    this.props.resetPassword(
        this.props.email,
        this.props.confirmationCode,
        values.password
      );
    setSubmitting(false);
    resetForm();
  };

  render = () => {
    return (
      <Formik initialValues={{ password1: '',password: '' }} onSubmit={this.handleSubmit}>
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
          {this.props && this.props.error !== "" ? (
            <Alert variant="danger">{this.props.error}</Alert>
          ) : (
            ""
          )}
          {this.props && this.props.successMessage !== "" ? (
            <Alert variant="success">{this.props.successMessage}</Alert>
          ) : (
            ""
          )}
          <Form.Group className="mt-4" controlId="formBasicPassword">
            <span className="pl-3 pt-1 position-absolute">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <Form.Control
              size="sm"
              className="pl-5 password"
              type="password"
              placeholder="Password"
              name="password1"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password1}
            />
          </Form.Group>
          <Error touched={touched.password1} message={errors.password1} />
          <Form.Group className="mt-4" controlId="formBasicPassword">
            <span className="pl-3 pt-1 position-absolute">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <Form.Control
              size="sm"
              className="pl-5"
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          <Error touched={touched.password} message={errors.password} />
          </Form.Group> 
          <Button
              size="sm"
              className="mb-3 btn btn-primary btn-lg btn-block"
              variant="primary"
              type="submit"
              disabled={this.props.isLoading}
            >
          {this.props.isLoading ? (
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
          ) : <span>Reset password</span>
           
          }
           </Button>
        </Form>)}
      </Formik>
    );
  };
}

const mapStateToProps = ({
  passwordForgotten,
  resetPassword
}: ApplicationState) => ({
  isLoading: resetPassword.isLoading,
  error: resetPassword.error,
  successMessage: resetPassword.successMessage,
  email: passwordForgotten.email,
  confirmationCode: passwordForgotten.confirmationCode
});

const mapActionsToProps = {
  resetPassword
};

export default connect(mapStateToProps, mapActionsToProps)(ResetPassword);
