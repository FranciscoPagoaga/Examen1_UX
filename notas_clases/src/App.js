import React from 'react';
import Jumbo from './components/jumbo'
import './App.css';
import { Row } from 'reactstrap';



class App extends React.Component{
  
  constructor(){
    super();
    this.state={
      selectedNoteIndex:null,
      selectedNote: null,
      notes: null
    }
  }

  render(){
    return(
      <div className="App">
        <Jumbo/>
      </div>
    )
  }

  componentDidMount = () =>{
    //aqui tengo que montar un pijazo de pendejadas
    const data = JSON.parse(localStorage.getItem("savedData"));
    console.log(data);
  }
}

export default App;
