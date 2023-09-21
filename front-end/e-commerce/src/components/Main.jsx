import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './Hbar.css'
import { useNavigate } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import './Main.css'
import axios from 'axios';
import Pcard from './Pcard';
import Search from './Search';
import Hbar from './Hbar';
import Carousel from './Carousel';
import Footer from './Footer';



function Main() {
  const [products, setProducts] = useState([])

  ;





    const [currentUser, setCurrentUser] = useState(null);



    const navigate = useNavigate();
    const handleLogout = () => {
      localStorage.removeItem('currentUser');
      navigate('/');
  
  
      ;
    };
    useEffect(() => {
    
      axios.get('http://localhost:3000/all-prodect')
      .then(response => {
        // Extract the data from the response
        setProducts(response.data.Prodect);
      console.log(response.data.Prodect)
// console.log(Prodect)


        // Map over the data and update the state
      
          // Add any other properties you need

           // Retrieve the user from local storage
    const storedUser = localStorage.getItem('currentUser');
console.log(storedUser+"1010")
    // If a user exists in local storage, parse the string to an object
    if (storedUser) {
      setCurrentUser(storedUser);
      console.log(currentUser)
    }
        
          
      })
      .catch(error => {
        console.error(error);
      });
    }, [currentUser]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div>

 
      
     {/* <Hbar/> */}

<Search/>
      <Carousel/>
<Row>
  <h2 className='ptitle'>CHOOSE  YOUR STYLE</h2>
        {products.map((item) => {
          return <Pcard item={item} />;
        })}
      </Row>
      
      
      <Footer/>

    </div>
  )
}

export default Main





