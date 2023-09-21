import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Row,Col,Image} from 'react-bootstrap'
import './Details.css'

import { Link } from 'react-router-dom';
import axios from 'axios';


function Details() {
  const Params=useParams()
  const [prod,setProd]=useState([])
  console.log(Params.id+"detail")

  const token = localStorage.getItem('token');
  console.log(token+"takan aanu mone")
  
  const addProduct = () => {
    axios.get(`http://localhost:3000/get-product/${Params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error("Error fetching product:", error);
      if (error.response) {
        console.log("Error response data:", error.response.data);
        console.log("Error response status:", error.response.status);
        if (error.response.status === 400) {
          // Show a message to the user indicating they need to log in
          // You can use a toast or an alert to show the message
          alert(error.response.data.message);
        }
      }
    });
  };
 
   useEffect(()=>{
    axios.get('http://localhost:3000/all-prodect')
  .then(response => {
  
    setProd(response.data.Prodect);
  console.log(response.data.Prodect)


  }


  )
  addProduct()
  },[Params.id])
  const details = prod.find((item)=>item.id==Params.id);

  return (
    <div>
      
      <Link  to='/main' className='a'><i className="bi bi-arrow-left-circle"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
				<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
			  </svg></i></Link>
{details?
<Row className='Row'>
  <Col>
  <Image id="img" className='img'  src={details.image}></Image>


  </Col>
  <Col>
  <h1>
    {details.title}
  </h1>
  <p id="category">{details.category}</p>
  <p id="dscription">{details.description}</p>
  </Col>
  <Col>
  <label>Price <h3>{details.price}</h3></label><br />
 <label>Rating<p>{details.rating.rate}({details.rating.count})</p></label>
 {/* <button className='btn1'>Add To Cart</button> */}
 <Link to={`/cart/${details.id}`}>
 <button className='btn1'>Add To Cart</button>
              </Link>
  </Col>
 
</Row>
:<h1>cannot get Product</h1>}





    </div>
  )
}

export default Details