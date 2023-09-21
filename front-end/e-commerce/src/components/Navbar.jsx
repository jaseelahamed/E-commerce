import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Dropdown from 'react-bootstrap/Dropdown';


export default function Header() {
  
  return (
    <div >
      <Navbar bg="black" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/home">
            <i className="fa-brands fa-wizards-of-the-coast"></i> ZulFashion
          </Navbar.Brand>
          <Nav>
     
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                 
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/cart">Orders</Dropdown.Item>
                  <Dropdown.Item href="#" >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            
              <Nav.Link href="/">Login</Nav.Link>
          
            <div className='me-2'>
              <Nav.Link href="/cart">
                <i className="fa-solid fa-cart-shopping m-1"></i>
              
              </Nav.Link>
              </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
