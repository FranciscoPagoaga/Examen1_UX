import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Apuntes = (props) => {
  return (
    <div>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>

      <CardTitle> {props.titulo} </CardTitle>
        <CardText> {props.nombre} </CardText>
        <CardText>{props.apunte}</CardText>
        <Button color ="danger">Delete</Button>
      </Card>
    </div>
  );
};



export default Apuntes;