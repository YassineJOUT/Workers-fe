import React from 'react'
import {Form,Button,Row,Col, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUser,faLock } from '@fortawesome/free-solid-svg-icons'

const RegistrationPage : React.FC = () => {
    return (
        <div>
            <Container>

            <Row style={{ marginTop : '100px'}}>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form>
                        <Form.Group className='mt-4' controlId="formBasicText">
                             <span className='pl-3 pt-1 position-absolute' >
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <Form.Control size="sm" className="pl-5" type="text" placeholder="Username" />
                            
                            
                        </Form.Group>
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
                        <Form.Group  className='mt-4' controlId="formBasicCheckbox">
                            <Form.Check   type="checkbox" label="Accept All terms & conditions" />
                        </Form.Group>
                        <Button size="sm"  className='mb-3 btn btn-primary btn-lg btn-block' variant="primary" type="submit">
                            Create Account
                        </Button>
                        <br />
                        
                        Or <a href="/login">get connected</a>
                    </Form>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default RegistrationPage;