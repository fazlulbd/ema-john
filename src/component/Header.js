import React from 'react'
import {Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../images/logo.png'
const Header = () => {
  return (
    <>
        <div className="logo text-center"><img src={logo} alt="" /></div>
        <Navbar className='main-manu' expand="lg" >
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#shop">Shop</Nav.Link>
                    <Nav.Link href="#review">Order Review</Nav.Link>
                    <Nav.Link href="#inventory">Manage Inventory here</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header
