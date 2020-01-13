import React, { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

type Props = {
  children: ReactNode
}

const Layout: React.SFC<Props> = ({ children }) => (
    <div>
<Header/>
	<Container>
        
        <Row style={{ marginTop : '100px' }}>
            <Col md={{ span: 4, offset: 4 }}>
                { children }
            </Col>
        </Row>
    </Container>
    <Footer/>
    </div>
);

export default Layout;
