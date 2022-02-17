
import { Navbar, Nav, Container} from "react-bootstrap";

const LayoutNavbar = () => {
  return(
    <div>
    <Navbar expand="lg" variant="light" bg="info">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>;
        </Container>
      </Navbar>
    </div>
  )
}

export default LayoutNavbar;