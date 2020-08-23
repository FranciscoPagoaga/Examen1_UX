import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Info from './infoform'

const Example = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col xs="3">.col</Col>
        <Col xs="6">
             <Info/>
        </Col>
      </Row>
      
    </Container>
  );
}

export default Example;