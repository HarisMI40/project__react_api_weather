import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import rain from "../asset/gif/rain.gif";

const LayoutCard = (props) => {
    const location = () => {
        alert("hiiii");
    }
    return (
        // <a href="https://www.flaticon.com/free-icons/rain" title="rain animated icons">Rain animated icons created by Freepik - Flaticon</a>
        // <div onCLick={() => window.location = "https://www.flaticon.com/free-icons/rain"}>
        <div onClick={() => window.open('https://www.flaticon.com/free-icons/rain', '_blank') } >
            <Card >
                <Card.Img variant="top" src={rain} />
                <Card.Body>
                    <Card.Title>{props.data.kota}</Card.Title>
                    <Card.Text>
                        {props.data.deskripsi}
                    </Card.Text>
                </Card.Body>

                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cuaca : {props.data.cuaca}</ListGroupItem>
                    <ListGroupItem>Negara : {props.data.negara}</ListGroupItem>
                </ListGroup>
            </Card>
        </div>
        
    );
}

export default LayoutCard;