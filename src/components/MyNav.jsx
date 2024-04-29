import { Navbar, Nav, Container } from "react-bootstrap";

const MyNav = () => (
  <Navbar expand="lg" className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#">Arnold Fitness</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
