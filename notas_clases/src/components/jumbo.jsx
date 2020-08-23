import React, { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';
import icon from '../img/Book-icon.png'
import '../App.css'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <img src={icon} style={{width: 50}}></img>
        <NavbarBrand href="/">Notas Academicas</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        
      </Navbar>
    </div>
  );
}

export default Example;