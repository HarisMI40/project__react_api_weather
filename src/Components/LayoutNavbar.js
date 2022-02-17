
import { Navbar, Nav, Container} from "react-bootstrap";

const LayoutNavbar = () => {
  return(
    <Navbar expand="lg" variant="light" bg="info">
        <Container>
          <Navbar.Brand href="#" style={{color:'white'}}>Cuaca</Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default LayoutNavbar;