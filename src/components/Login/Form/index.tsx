import React, { Component } from "react";
import { Form, Button, Row, Col, Spinner, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { login } from "../../../store/Login/actions";
import { connect } from "react-redux";
import { history } from "../../../utilities/history";
import { ApplicationState } from "../../../store";
import { Formik } from "formik";
import { Error } from "../../Error";
import { loginValidationSchema } from "../../../utilities/validationSchemas";

interface ILoginProps {
  login: Function;
}

interface ILoginStateProps {
  userInfo: any;
  isLoggedIn: boolean;
  error: string;
  isLoading: boolean;
}

type IProps = ILoginProps & ILoginStateProps;

class LoginPage extends Component<IProps> {
  handleSubmit = (
    values: { email: string; password: string },
    {
      setSubmitting,
      resetForm
    }: { setSubmitting: Function; resetForm: Function }
  ) => {
    this.props.login(values.email, values.password);
  };

  displayAlert = (error: string) => {
    console.log(this.props.error);
    return <Alert variant="danger">{error}</Alert>;
  };
  render = () => {
    if (this.props !== null && this.props.isLoggedIn === true) {
      history.push("/profile");
    }

    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
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
            {this.props !== null && this.props.error !== ""
              ? this.displayAlert(this.props.error)
              : ""}
            {JSON.stringify(values)}
            <Form.Group className="mt-4" controlId="formBasicEmail">
              <span className="pl-3 pt-1 position-absolute">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <Form.Control
                size="sm"
                className="pl-5 email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                value={values.email}
              />
              <Error touched={touched.email} message={errors.email} />
            </Form.Group>
            <Form.Group className="mt-4" controlId="formBasicPassword">
              <span className="pl-3 pt-1 position-absolute">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <Form.Control
                size="sm"
                className="pl-5 pwd"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
                placeholder="Password"
                value={values.password}
              />
              <Error touched={touched.password} message={errors.password} />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
              </Col>
              <Col>
                <a href="/forgotten-password" className="float-sm-right">
                  Forgot password
                </a>
              </Col>
            </Row>
            {this.props.isLoading ? (
              <Button
                size="sm"
                className="mb-3 btn btn-primary btn-lg btn-block"
                variant="primary"
                type="submit"
                disabled={this.props.isLoading}
              >
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            ) : (
              <Button
                size="sm"
                className="mb-3 btn btn-primary btn-lg btn-block"
                variant="primary"
                type="submit"
                disabled={this.props.isLoading}
              >
                Login
              </Button>
            )}
            <br />
            Or <a href="/register">Register now</a>
          </Form>
        )}
      </Formik>
    );
  };
}

const mapStateToProps = ({ login }: ApplicationState) => ({
  userInfo: login.userInfo,
  isLoggedIn: login.isLoggedIn,
  error: login.error,
  isLoading: login.isLoading
});

const mapActionsToProps = { login };

export default connect(mapStateToProps, mapActionsToProps)(LoginPage);
