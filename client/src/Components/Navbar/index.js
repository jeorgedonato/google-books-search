import React from 'react';
import { Navbar as Navi, Nav} from 'react-bootstrap';
import './style.css';

const Navbar = () => {
  return (
    <>
      <Navi bg="info" expand="lg"> 
        <Navi.Brand href="#home" style={{color : "white"}}>Google Books Search</Navi.Brand>
        <Navi.Toggle aria-controls="basic-navbar-nav" />
        <Navi.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" style={{color : "white"}}>Search</Nav.Link>
            <Nav.Link href="/saved" style={{color : "white"}}>Saved</Nav.Link>
          </Nav>
        </Navi.Collapse>
      </Navi>
    </>
  )
};

export default Navbar;