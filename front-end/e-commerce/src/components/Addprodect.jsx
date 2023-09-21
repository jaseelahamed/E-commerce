import React, { useState } from 'react';
import axios from 'axios';

function Addprodect() {

    const [id, setProductId] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [rate, setRate] = useState('');
    const [count, setCount] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      axios
      .post("http://localhost:3000/api/products", { id,title,price,description,category,image, rating: {
        rate,
        count,
      }, })
      .then((response) => {
        console.log(response.data);
        alert(response.data.message)
        // navigate('/lg');
        
        // Handle the response data as needed
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

   
    return (
      <div>
        <h1>MERN Stack - Add Products</h1>
        <form onSubmit={handleSubmit}>
          <label>
            ID:
            <input
              type="text"
              value={id}
              onChange={(e) => setProductId(e.target.value)}
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
          <label>
            Category:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
          <label>
            Image:
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <label>
            Rating Rate:
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </label>
          <label>
            Rating Count:
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </label>
          <button type="submit">Add Product</button>
        </form>
      </div>
    );
  };
export default Addprodect;