import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';


const jumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid >
          <h1 className="display-3">Notas Academicas</h1>
          <p className="lead">La mejor manera para poder tomar notas de tus clases, desde cualquier lado</p>
        </Container>
      </Jumbotron>
      <Button color="primary" size="lg">Agregar notas</Button>{' '}
    </div>
  );
};

export default jumbo;