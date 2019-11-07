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

<<<<<<< HEAD
export default Layout;
=======
export default Layout;
>>>>>>> 0fa0ffe6572b07e92d366cbb0ec1bcc8a7ce1d77
