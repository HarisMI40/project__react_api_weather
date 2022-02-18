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
    <div className="App" style={{width:"50%",margin:"0 auto"}}>

      {/* <LayoutNavbar /> */}
      <Container>
        <section style={{width:"70%", margin:"20% auto"}}>
          <div>
            <Col>
              <Search onSearchdData={searchDataHandler} />
            </Col>
          </div>
        
      
          <div>
              <Col>
                <LayoutCard dataSearch={search}/>
              </Col>
          </div>
        </section>
      </Container>
    </div>
  );
}
export default App;