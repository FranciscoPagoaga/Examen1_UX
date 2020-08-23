import React, { useState, Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

class infoform extends Component{
  constructor(props){
    super(props)
    this.state = {
      clase: '',
      titulo: '',
      apunte: '',
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    var data;
    if(JSON.parse(localStorage.getItem("data"))===null){
      data = [this.state]
    }else{
      data = JSON.parse(localStorage.getItem("data"))
      data.push(this.state)
    }
    localStorage.setItem("data",JSON.stringify(data))
    window.location.reload(false);
  }
  
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render(){
    return (
      <div>
    <h1>Ingrese Apuntes:</h1>
    <form>
    <InputGroup> 
    
    <InputGroupAddon addonType="prepend">
    <InputGroupText>
    <span role="img" aria-label="sheep">📚</span>
    </InputGroupText>
    </InputGroupAddon>
    <Input placeholder="Clase" name="clase" onChange={this.handleInputChange}/>
    </InputGroup>
    
    <br />
    <InputGroup>
    <InputGroupAddon addonType="prepend">
    
    <InputGroupText>
    <span role="img" aria-label="sheep">📝</span>
    </InputGroupText>
    </InputGroupAddon>
    <Input placeholder="Titulo" name="titulo" onChange={this.handleInputChange}/>
    </InputGroup>
    <br />
    <InputGroup>
    <InputGroupAddon addonType="prepend">
    <InputGroupText>
    <span role="img" aria-label="sheep">👨‍🏫</span>
    </InputGroupText>
    </InputGroupAddon>
    <Input placeholder="Apunte" name= "apunte"  onChange={this.handleInputChange}/>
    </InputGroup>
    <br />
    <Button color="primary" onClick={this.handleSubmit}>Agregar Apunte</Button>{' '}
    </form>
    </div>
    );
  }
};

export default infoform;