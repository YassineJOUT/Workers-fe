import React, { Component } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ApplicationState } from "../../../store";
import { connect } from "react-redux";
import { passwordForgotten } from "../../../store/PasswordForgotten/actions";
import { Formik } from "formik";
import { PassordForgottenValidationSchema } from "../../../utilities/validationSchemas";
import { Error } from "../../Error";

interface IPFProps {
  passwordForgotten: Function;
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
  handleSubmit = (
    values: { email: string },
    {
      setSubmitting,
      resetForm
    }: { setSubmitting: Function; resetForm: Function }
  ) => {
    setSubmitting(true);
    this.props.passwordForgotten(values.email);
    setSubmitting(false);
    resetForm();
  };

  render = () => {
    const result = (
      <Formik
        initialValues={{ email: "" }}
        validationSchema={PassordForgottenValidationSchema}
        onSubmit={this.handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting
        }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              {
                this.props.error && <Alert variant="danger">{this.props.error}</Alert>
              }
               {
                this.props.successMessage && <Alert variant="success">{this.props.successMessage}</Alert>
              }
              <Form.Group className="mt-4" controlId="formBasicEmail">
                <span className="pl-3 pt-1 position-absolute">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <Form.Control
                  size="sm"
                  className="pl-5 email"
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Email"
                />
                <Error touched={touched.email} message={errors.email} />
              </Form.Group>
              
            </div>
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
              ) : (
                <span>Recover password</span>
              )}
            </Button>
            <br />
            Or <a href="/login">Back to login!</a>
          </Form>
        )}
      </Formik>
    );
    return result;
  };
}

const mapStateToProps = ({ login, passwordForgotten }: ApplicationState) => ({
  isLoggedIn: login.isLoggedIn,
  successMessage: passwordForgotten.successMessage,
  isLoading: passwordForgotten.isLoading,
  error: passwordForgotten.error,
  email: passwordForgotten.email
});

const mapDispatchToProps = { passwordForgotten };

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForgotten);
