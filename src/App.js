import React,{useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {Container, Row, Col} from "react-bootstrap";
import LayoutNavbar from "./Components/LayoutNavbar";
import LayoutCard from "./Components/LayoutCard";
import Search from "./Components/Search";
import { findByLabelText } from "@testing-library/react";


const App = () =>  {
  const [search, setSearch] = useState('karawang');

  const searchDataHandler = (e) => {
    setSearch(e);
  }
  


  // const data = [{id: "a1"},{id:"a2"}];
  return (
    <div className="App">

      <LayoutNavbar />
      <Container>
        <Row>
          <Col md={3}>
            <Search onSearchdData={searchDataHandler} />
          </Col>
        </Row>
      
     
        <Row>
            <Col md={3}>
              <LayoutCard dataSearch={search}/>
            </Col>
        </Row>
        
      </Container>
    </div>
  );
}
export default App;