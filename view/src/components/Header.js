import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand as={Link} to="/">John Huynh</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/photos">Photos</Nav.Link>
        <Nav.Link as={Link} to="/videos">Videos</Nav.Link>
        <Nav.Link as={Link} to="/thoughtsAndPrayers">Thoughts and Prayers</Nav.Link>
        <Nav.Link
          className="d-lg-none text-success"
          href="https://www.gofundme.com/f/in-the-loving-memory-of-john-huynh?utm_campaign=p_cp_url&utm_medium=os&utm_source=customer"
          target="_blank"
          rel="noreferrer"
        >
          Donate
        </Nav.Link>
        <a
          className="ml-2 d-none d-lg-block"
          href="https://www.gofundme.com/f/in-the-loving-memory-of-john-huynh?utm_campaign=p_cp_url&utm_medium=os&utm_source=customer"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="success">Donate</Button>
        </a>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;