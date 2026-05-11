import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <div className='container'>

        <Navbar.Brand as={Link} to='/'>
          Smart Parking
        </Navbar.Brand>

        <Nav className='me-auto'>

          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>

          <Nav.Link as={Link} to='/events'>
            Events
          </Nav.Link>

          {/* 🟢 زر Register */}
          <Nav.Link as={Link} to='/register'>
            Register
          </Nav.Link>

          {/* 🟢 زر Login */}
          <Nav.Link as={Link} to='/login'>
            Login
          </Nav.Link>

        </Nav>

        <Form className='d-flex'>

          <FormControl
            type='search'
            placeholder='Search'
            className='me-2'
          />

          <Button variant='success'>
            Search
          </Button>

        </Form>

      </div>
    </Navbar>
  )
}

export default NavigationBar