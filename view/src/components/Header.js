import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand as={Link} to="/">In Loving Memory of John Huynh</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/photos">Photos</Nav.Link>
        <Nav.Link as={Link} to="/notes">Notes</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;