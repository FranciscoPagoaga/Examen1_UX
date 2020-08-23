import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
        <h1>Ingrese Apuntes:</h1>
      <InputGroup>     
        <InputGroupAddon addonType="prepend">
          <InputGroupText>📚</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Clase" />
      </InputGroup>
      
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
            
          <InputGroupText>📝</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Titulo" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>👨‍🏫</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Cuerpo" />
      </InputGroup>
      <br />
    </div>
  );
};

export default Example;