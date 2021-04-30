import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} href="#home">Home</Nav.Link>
        <Nav.Link as={Link} href="#features">Features</Nav.Link>
        <Nav.Link as={Link} href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;