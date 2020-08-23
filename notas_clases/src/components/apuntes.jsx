import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Apuntes = (props) => {
    return (
    <div>
        <br/>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>

      <CardTitle> Titulo: {props.titulo} </CardTitle>
        <CardText> Clase: {props.nombre} </CardText>
        <CardText>{props.apunte}</CardText>
        <Button color ="danger" onClick={()=>{eliminar(props);}}>Eliminar</Button>
      </Card>
    </div>
  );
};

function eliminar(prop){
    let data = JSON.parse(localStorage.getItem("data"))
    console.log(prop.index)
    data.splice(prop.index,1)
    localStorage.setItem("data",JSON.stringify(data))
    window.location.reload(false);
}


export default Apuntes;