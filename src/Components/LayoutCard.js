import { useState,useEffect } from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import rain from "../asset/gif/rain.gif";

const LayoutCard = (props) => {
    const [data, setData] = useState([]);
    const getDataApi = async () => {
        console.log(props.dataSearch);
        try {
          const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${props.dataSearch}&cnt=1&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric`, {
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

    return (
       
        <div onClick={() => window.open('https://www.flaticon.com/free-icons/rain', '_blank') } >
            <Card >
                <Card.Img variant="top" src={rain} />
                <Card.Body>
                    <Card.Title>{data.kota}</Card.Title>
                    <Card.Text>
                        {data.deskripsi}
                    </Card.Text>
                </Card.Body>

                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cuaca : {data.cuaca}</ListGroupItem>
                    <ListGroupItem>Negara : {data.negara}</ListGroupItem>
                </ListGroup>
            </Card>
        </div>
        
    );
}

export default LayoutCard;