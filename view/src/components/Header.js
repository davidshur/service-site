import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand as={Link} to="/">In Loving Memory of John Huynh</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/photos">Photos</Nav.Link>
        <Nav.Link as={Link} to="/notes">Thoughts and Prayers</Nav.Link>
        <a
          href="https://www.gofundme.com/f/in-the-loving-memory-of-john-huynh?utm_campaign=p_cp_url&utm_medium=os&utm_source=customer"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="success">Donate</Button>
        </a>
      </Nav>
    </Navbar>
  );
}

export default Header;