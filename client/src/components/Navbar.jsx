import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavigationBar() {

  return (

    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
    >

      <Container>

        {/* Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold"
        >
          🚗 Smart Parking
        </Navbar.Brand>

        {/* Mobile Menu Button */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Links */}
        <Navbar.Collapse id="navbar-nav">

          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/parking">
              Parking
            </Nav.Link>

            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>

            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  )
}

export default NavigationBar