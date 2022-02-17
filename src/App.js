import React,{useEffect, useState, useRef} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {Container, Row, Col} from "react-bootstrap";
import LayoutNavbar from "./Components/LayoutNavbar";
import LayoutCard from "./Components/LayoutCard";
import { findByLabelText } from "@testing-library/react";


const App = () =>  {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('karawang');
  const getDataApi = async () => {

    try {
      const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${search}&cnt=1&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": "04bec7c583msh20d9e28aafbaa9dp11c4a1jsn363089ebe381"
        }
      });

        const data = await response.json();
        // console.log(data);
        setData({
          kota : data.list[0].name,
          negara : data.list[0].sys.country,
          cuaca : data.list[0].weather[0].main,
          deskripsi : data.list[0].weather[0].description,
        });
        // console.log(data.list[0].weather[0].main);
        // console.log(data.city.name);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getDataApi()
  }, [])

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
              <LayoutCard data={data}/>
            </Col>
        </Row>
        
      </Container>
    </div>
  );
}

function Search(props) {
  const data = useRef('');

  const divStyle = {  
   marginTop:'10px',
   marginBottom:'10px',
   display:'flex',
   justifyContent:'space-between',
  }

  const formSubmitHandler = event => {
    event.preventDefault();
    props.onSearchdData(data.current.value);
  }

  return (
    <form onSubmit={formSubmitHandler} style={divStyle}>
      <input type="text" ref={data} />
      <button>Cari</button>
    </form>
  );
}
export default App;