import React from 'react'
import {Card,} from "react-bootstrap"
import {Link} from 'react-router-dom'
import './Pcard.css'

function Pcard({item}) {
    // console.log(item+"dfgkjytrew")
  return (
 
    <Card className='margin' style={{ width: '18rem' }}>
    <Card.Img variant="top" style={{width:"17rem",height:"200px"}} src={item.image}/>
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
      <Card.Text>{item.price}</Card.Text>
      
      </Card.Text>
    
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
    <Card.Footer>
  <Link to={`/pd/${item.id}`} className='btn btn-outline-dark'>View More</Link>
    </Card.Footer>
  </Card>

  )
}

export default Pcard