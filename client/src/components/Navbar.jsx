import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

function NavigationBar() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand>Smart Parking</Navbar.Brand>

      <Nav className='me-auto'>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/login'>Login</Nav.Link>
      </Nav>

      <Form className='d-flex'>
        <FormControl
          type='search'
          placeholder='Search'
        />
        <Button variant='success'>Search</Button>
      </Form>
    </Navbar>
  )
}

export default NavigationBar