import React from 'react'
import {Form,Button,Row,Col, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

const LoginPage : React.FC = () => {
    return (
        <div>
            <Container>

            <Row style={{ marginTop : '100px'}}>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form>
                        
                        <Form.Group  className='mt-4' controlId="formBasicEmail">
                            <span className='pl-3 pt-1 position-absolute' >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <Form.Control size="sm"  className="pl-5"  type="email" placeholder="Email" />
                            
                            
                        </Form.Group>
                        
                        
                        <Button size="sm"  className='mb-3 btn btn-primary btn-lg btn-block' variant="primary" type="submit">
                            Recover password
                        </Button>
                        <br />
                        
                        Or <a href="/login">Back to login!</a>
                    </Form>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default LoginPage;