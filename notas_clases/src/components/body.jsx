import React ,{ useState } from 'react';
import { Container, Row, Col, Input,  } from 'reactstrap';
import Info from './infoform'
import Apuntes from './apuntes'
function applyFilter (data,filter) {
  if(filter===""){
    return data;
  }
  let filterData = data.filter(item =>item.clase.toString().toLowerCase().includes(filter));
  return filterData;
}
const Example = (props) => {
  let data=JSON.parse(localStorage.getItem("data")) || [];
  const [filter, setFilter] = useState("")
  const handleInputChange = (event)=>setFilter(event.target.value);
  let filteredData = applyFilter(data,filter);
  return (
    <Container fluid >
      <Row style={{paddingBottom: '2em'} }>
        <Col xs="12" sm="12" md={{size:6, offset: 3}} >
          <Info/>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="12" md={{size:6, offset: 3}}>
          <Input type="text" name="filter" id="filter" placeholder="Filtro de Clase" onChange={handleInputChange}/>
          {filteredData.map((item, index) =>{
            return <Apuntes titulo={item.titulo} nombre={item.clase} apunte={item.apunte} key={index}>  </Apuntes>})}
        </Col>
        
      </Row>
      
    </Container>
  );
}


export default Example;