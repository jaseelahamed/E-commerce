import './Cart.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useParams } from 'react-router-dom';

function Cart() {


 

  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
const [Cartp,setCartp]=useState([])

  const token = localStorage.getItem('token');
  console.log(token+"takan aanu mone")
  const Params = useParams();
  console.log(Params.id + "cart");

  

 
 

  const usname = localStorage.getItem('currentUser');
  const cartData = {
    usname:localStorage.getItem('currentUser')
  };

console.log(usname+"qwerftghjklkjhgfd")
  // const getcart = async () => {
  //   try {
  //     const result = await axios.get("http://localhost:3000/getcart",{ headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
    
    
  //     setCartp(result)
  //     console.log(Cartp)
      
  //   } catch (error) {
  //     console.error("Error fetching product:", error);
  //     if (error.response) {
  //       console.log("Error response data:", error.response.data);
  //       console.log("Error response status:", error.response.status);
  //       if (error.response.status === 400) {
       
  //         alert(error.response.data.message);
  //       }
  //     }
  //   }
  // };

 


// const handleQuantityChange = (productId, change) => {
//   const updatedCart = Cartp.map((item) => {
//     if (item.id === productId) {
//       const newQuantity = item.quantity + change;
//       return {
//         ...item,
//         quantity: Math.max(1, newQuantity), 
//       };
//     }
//     return item;
//   });


//   setCartp(updatedCart);
// };
const handleQuantityChange = (productId, change) => {
  setCartp((prevCart) => {
    const updatedCart = prevCart.map((item) => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change;
        return {
          ...item,
          quantity: Math.max(1, newQuantity), // Ensure minimum quantity is 1
        };
      }
      return item;
    });

    return updatedCart;
  });
};


    useEffect(()=>{

      axios.get('http://localhost:3000/getcart',{ headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        // Handle the response and update the cartItems state with the received data
        setCartp(response.data.data);
        console.log(response.data.data)
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error);
      });


        // getcart()
       
    },[])
    
// Inside your Cart component


const [totalPrice, setTotalPrice] = useState(0);
const [totalQuantity, setTotalQuantity] = useState(0);

// useEffect(() => {
//   let priceSum = 0;
//   let quantitySum = 0;

//   Cartp.forEach(item => {
//     priceSum += parseFloat(item.price);
//     quantitySum += parseInt(item.quantity);
//   });

//   setTotalPrice(priceSum);
//   setTotalQuantity(quantitySum);
// }, [Cartp,handleDelete]);
useEffect(() => {
  let priceSum = 0;
  let quantitySum = 0;

  Cartp.forEach(item => {
    priceSum += parseFloat(item.price) * item.quantity;
    quantitySum += parseInt(item.quantity);
  });

  setTotalPrice(priceSum);
  setTotalQuantity(quantitySum);
}, [Cartp]);



const handleDelete = (productId) => {
  const username = localStorage.getItem('currentUser'); // Get the current username from localStorage

  axios.delete(`http://localhost:3000/removeFromCart/${username}/${productId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
  .then(response => {
    alert(response.data.message);

    // Update the cart after successful deletion
  })
  .catch(error => {
    console.error(error);
    alert("An error occurred while removing the product from the cart.");
  });
};


  return (
    
    <div>
      <Link  to='/main' className='a'><i className="bi bi-arrow-left-circle"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
				<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
			  </svg></i></Link>
        <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
      {Cartp.length > 0 ? (
  Cartp.map((item,index) => (
    <div className="card mb-4">
    <div className="card-header py-3">
      <h5 className="mb-0">Cart - {index+1} items</h5>
    </div>
    <div className="card-body">


    
      <div className="row">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">

          <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
            {/* <img style={{width:"17rem",height:"200px"}} src={item.image}
              className="w-100" alt="Blue Jeans Jacket" /> */}
              <img
  style={{ width: "17rem", height: "200px" }}
  src={item.image}
  className="w-100"
  alt="Product"
/>
            <a href="#!">
              <div className="mask"></div>
            </a>
          </div>
      
        </div>
       
        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
          
        <p id="p" style={{ color: 'black' }}><strong>{item.category}</strong></p>

          <p id="p">Color: blue</p>
          <p id="p">Size: M</p>
          <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
            title="Remove item"  onClick={() => handleDelete(item.id)}>
            <i className="fas fa-trash"></i>
          </button>
          <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
            title="Move to the wish list">
            <i className="fas fa-heart"></i>
          </button>
  
          <p id="p" className="text-start text-md-center" style={{ color: 'black' }}>
<strong>{item.price}</strong>
</p>

  
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          
          <div className="st">
            <button className="btn btn-primary px-3 me-2"
              onClick={() => handleQuantityChange(item.id, -1)}>
              <i className="fas fa-minus"></i>
            </button>

            <div className="form-outline">
            <input
  id={`form-${item.id}`}
  min="1"
  name="quantity"
  value={item.quantity}
  type="number"
  className="form-control"
  onChange={(e) => {
    const newQuantity = parseInt(e.target.value);
    const change = newQuantity - item.quantity; // Calculate the change value
    handleQuantityChange(item.id, change);
  }}
/>

              {/* <input id="form1" min="0" name="quantity" value="1" type="number" className="form-control" /> */}
              <label  id="p"  className="form-label" htmlFor={`form-${item.id}`}>Quantity</label>
            </div>

            <button className="btn btn-primary px-3 ms-2"
                onClick={() => handleQuantityChange(item.id, 1)}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
{/* <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
  <div className="st">
    <button
      className="btn btn-primary px-3 me-2"
      onClick={() => handleQuantityChange(item.id, -1)}
    >
      <i className="fas fa-minus"></i>
    </button>

    <div className="form-outline">
      <input
        id={`form-${item.id}`}
        min="1"
        name="quantity"
        value={item.quantity}
        type="number"
        className="form-control"
        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
      />
      <label id="p" className="form-label" htmlFor={`form-${item.id}`}>
        Quantity
      </label>
    </div>

    <button
      className="btn btn-primary px-3 ms-2"
      onClick={() => handleQuantityChange(item.id, 1)}
    >
      <i className="fas fa-plus"></i>
    </button>
  </div>
</div> */}

      
        </div>
        
      </div>
       
       

      <hr className="my-4" />

      
    

    </div>
  </div>
    // Render each cart item here
    ))
    ) : (
      <p>Your cart is empty.</p>
    )}
    
       
        
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0" id="p">Summary</h5>
          </div>
          {/* <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0" id="p">
                Products
                <span>${totalPrice.toFixed(2)}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0" id="p">
        Total Quantity
        <span>{totalQuantity}</span>
      </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0" id="p">
                Shipping
                <span id="p">Gratis</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong id="p">Total amount</strong>
                  <strong>
                    <p className="mb-0" id="p">(including VAT)</p>
                  </strong>
                </div>
                <span id="p"><strong>${totalPrice.toFixed(2)}</strong></span>
              </li>
            </ul> */}  <div className="card-body">
    <ul className="list-group list-group-flush">
      {Cartp.map((item) => (
         <li
         className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
         id="p1"
         key={item.id}
       >
         <span className="product-name">
           {item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}
         </span>
         <span className="quantity">Quantity: {item.quantity}</span>
         <span id="itemprice">${(item.price * item.quantity).toFixed(2)}</span>
       </li>
        // <li
        //   className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
        //   id="p1"
        //   key={item.id}
        // >
        //   {item.title}  Quantity:{item.quantity}
        //   <span id="itemprice">${(item.price * item.quantity).toFixed(2)}</span>
        // </li>
      ))}
      <li className="list-group-item d-flex justify-content-between align-items-center px-0" id="p">
        Total Quantity
        <span>{totalQuantity}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center px-0" id="p">
        Shipping
        <span id="p">Gratis</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
        <div>
          <strong id="p">Total amount</strong>
          <strong>
            <p className="mb-0" id="p">
              (including VAT)
            </p>
          </strong>
        </div>
        <span id="p">
          <strong>${totalPrice.toFixed(2)}</strong>
        </span>
      </li>
    </ul>

            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>




          <div className="card mb-4">
          <div className="card-body">
            <p id="p"><strong>Expected shipping delivery</strong></p>
            <p className="mb-0" id="p">12.10.2020 - 14.10.2020</p>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          <div className="card-body">
            <p id="p"><strong>We accept</strong></p>
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
              alt="PayPal acceptance mark" />
          </div>
        </div>


        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Cart