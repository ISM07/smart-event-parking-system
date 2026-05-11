import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

function NavigationBar() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <div className='container'>

        <Navbar.Brand>
          Smart Parking
        </Navbar.Brand>

        <Nav className='me-auto'>

          <Nav.Link href='/'>
            Home
          </Nav.Link>

          <Nav.Link href='/events'>
            Events
          </Nav.Link>

          <Nav.Link href='/login'>
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