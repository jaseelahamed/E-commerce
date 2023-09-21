import React, { useState } from 'react';
import './Serch.css'
import {Card,} from "react-bootstrap"
import {Link} from 'react-router-dom'



const Search = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      // Make a request to your backend API to get search results
      const response = await fetch(`/api/search?query=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data.results); // Assuming the API returns an array of results
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  return (
    <>
    <div>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width'>
            {/* <img src={logo} alt='' /> */}
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input
              type='text'
              placeholder='Search and hit enter...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart/:id'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                {/* <span>{CartItem.length === '' ? "" : CartItem.length}</span> */}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div>
        {/* Render search results */}
        {searchResults.map((result) => (
          <div key={result.id}>
            <div>
            <Card className='margin' style={{ width: '18rem' }}>
    <Card.Img variant="top" style={{width:"17rem",height:"200px"}} src={result.image}/>
    <Card.Body>
      <Card.Title>{result.title}</Card.Title>
      <Card.Text>
      <Card.Text>{result.price}</Card.Text>
      
      </Card.Text>
    
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
    <Card.Footer>
  <Link to={`/pd/${result.id}`} className='btn btn-outline-dark'>View More</Link>
    </Card.Footer>
  </Card>
            </div>
            {/* Render search result information */}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Search