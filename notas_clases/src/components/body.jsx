import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Info from './infoform'

const Example = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col xs="6" sm="6" md="4">.col</Col>
        <Col xs="6" sm="6" md="6">
             <Info/>
        </Col>
      </Row>
      
    </Container>
  );
}

export default Example;