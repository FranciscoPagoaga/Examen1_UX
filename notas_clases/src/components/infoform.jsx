import React, {useState} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

const Infoform = (props) => {
  return (
    <div>
        <h1>Ingrese Apuntes:</h1>
      <InputGroup>     
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
          <span role="img" aria-label="sheep">📚</span>
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Clase" name="clase" />
      </InputGroup>
      
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
            
          <InputGroupText>
          <span role="img" aria-label="sheep">📝</span>
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Titulo" name="titulo"  />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
          <span role="img" aria-label="sheep">👨‍🏫</span>
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Apunte" name= "apunte" value={this.state.apunte}/>
      </InputGroup>
      <br />
      <Button color="primary" onClick={agregar}>Agregar Apunte</Button>{' '}
    </div>
  );
  
  function handleChange(event){
    this.setState({
      [event.target.name] : event.target.value})

    console.log();
  }

  function agregar(props){
    var hola =JSON.parse(localStorage.getItem("data"))
    console.log(Input.getItem("titulo"));
    hola.push({
      
    });

  }
};

export default Infoform;