import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const [expanded, setExpanded] = useState(false);

  function collapseNavbar() {
    setExpanded(false);
  }

  function toggleNavbar() {
    setExpanded(!expanded);
  }

  return (
    <Navbar collapseOnSelect expanded={expanded} expand="lg" bg="light" variant="light">
      <Navbar.Brand as={Link} to="/">In Memory of John Huynh</Navbar.Brand>
      <Navbar.Toggle onClick={toggleNavbar} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link onClick={collapseNavbar} as={Link} to="/">Home</Nav.Link>
        <Nav.Link onClick={collapseNavbar} as={Link} to="/photos">Photos</Nav.Link>
        <Nav.Link onClick={collapseNavbar} as={Link} to="/videos">Videos</Nav.Link>
        <Nav.Link onClick={collapseNavbar} as={Link} to="/thoughtsAndPrayers">Thoughts and Prayers</Nav.Link>
        <Nav.Link
          onClick={collapseNavbar}
          className="d-lg-none text-success"
          href="https://www.gofundme.com/f/in-the-loving-memory-of-john-huynh?utm_campaign=p_cp_url&utm_medium=os&utm_source=customer"
          target="_blank"
          rel="noreferrer"
        >
          Donate
        </Nav.Link>
        <a
          onClick={collapseNavbar}
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