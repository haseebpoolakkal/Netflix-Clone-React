import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg='dark' expand="lg">
        <Container>
        <Navbar.Brand href="/" className='text-light'>Netflix Clone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='text-light'>Home</Nav.Link>
            <Nav.Link href="admin" className='text-light'>Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar