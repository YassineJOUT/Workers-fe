import React, { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

type Props = {
  children: ReactNode
}

const Layout: React.SFC<Props> = ({ children }) => (
	<Container>
        <Row style={{ marginTop : '100px' }}>
            <Col md={{ span: 4, offset: 4 }}>
                { children }
            </Col>
        </Row>
    </Container>
);

export default Layout;
