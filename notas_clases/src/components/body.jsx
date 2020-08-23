import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Info from './infoform'
import Apuntes from './apuntes'
const Example = (props) => {
  let data;
  if(JSON.parse(localStorage.getItem("data"))=== null){
    data = []
  }else{
    data = JSON.parse(localStorage.getItem("data"))
  }
  console.log(data);
  return (
    <Container fluid>
      <Row>
        <Col xs="12" sm="6" md="4">
          {data.map((item, index) =>{
            return <Apuntes titulo={item.titulo} nombre={item.clase} apunte={item.apunte} key={index}>  </Apuntes>})}
        </Col>
        <Col xs="12" sm="6" md="6">
             <Info/>
        </Col>
      </Row>
      
    </Container>
  );
}



export default Example;