// import React, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBBtn,
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBDropdownItem,
//   MDBCollapse,
// } from 'mdb-react-ui-kit';

// export default function App() {
//   const [showBasic, setShowBasic] = useState(false);

//   return (
//     <MDBNavbar id='navf' expand='lg' light bgColor='light'>
//       <MDBContainer fluid>
//         <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

//         <MDBNavbarToggler
//           aria-controls='navbarSupportedContent'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setShowBasic(!showBasic)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler>

//         <MDBCollapse navbar show={showBasic}>
//           <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
//             <MDBNavbarItem>
//               <MDBNavbarLink active aria-current='page' href='#'>
//                 Home
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#'>Link</MDBNavbarLink>
//             </MDBNavbarItem>

//             <MDBNavbarItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle tag='a' className='nav-link' role='button'>
//                   Dropdown
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu>
//                   <MDBDropdownItem link>Action</MDBDropdownItem>
//                   <MDBDropdownItem link>Another action</MDBDropdownItem>
//                   <MDBDropdownItem link>Something else here</MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavbarItem>

//             <MDBNavbarItem>
//               <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
//                 Disabled
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>

//           <form className='d-flex input-group w-auto'>
//             <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
//             <MDBBtn color='primary'>Search</MDBBtn>
//           </form>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }







import React from 'react'

import { Link } from 'react-router-dom';
import './Hbar.css'
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';





function Hbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();


  const handleLogin = () => {
    // Your login logic here
    setIsLoggedIn(true);
    console.log(isLoggedIn+"wat problem")
  };
  console.log(isLoggedIn)
  
  const handleLogout = () => {
   
    setIsLoggedIn(false);
    setCurrentUser(null); // Reset the currentUser state when logging out
    localStorage.removeItem('currentUser'); // Remove the user from local storage
    navigate('/');
  };


    // Use useEffect to log the isLoggedIn state whenever it changes
    // useEffect(() => {
    //   console.log(isLoggedIn);
    // }, [isLoggedIn]);
  
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    console.log(storedUser+"123456")
    if (storedUser) {
      setCurrentUser(storedUser);
      console.log(currentUser)
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h3 id="h">BUYNAA</h3>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
        </span>
      </button>
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Cart</Nav.Link>
            <Nav.Link href="#link">Service</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
     
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
        <li id="log" className="nav-item">
          {isLoggedIn ? (
            <p  id="cuser" className="nav-link">HAI, {currentUser}</p>
          ): <Link id="link" to="/reg" className="btn btn-success ">    <button id="sign-up-button" className="sign-up-button"> Join Now </button></Link>}
          </li>
        
          <li id="log" className="nav-item">
            {isLoggedIn ? (
              <Link  className="nav-link" to="/lg" onClick={handleLogout}>
                <h4 className="login-text"> Log out</h4>
               
               
              </Link>
            ) : (
              <Link  className="nav-link" to="/lg" onClick={handleLogin}>
                <h4 className="login-text"> Login</h4>
               
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  </div>
  )
}

export default Hbar