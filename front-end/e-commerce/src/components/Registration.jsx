import React, { useState } from 'react'
import "./Register.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import login from '../images/login.png';

function Registration() {
  const navigate = useNavigate();

  const [usname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pswd, setPassword] = useState('');
  
  // console.log(usname,email,pswd)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Make an API call to register the user
    axios
      .post("http://localhost:3000/register", { usname, email, pswd })
      .then((response) => {
        console.log(response.data);
        alert(response.data.message)
        navigate('/lg');
        
        // Handle the response data as needed
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
   <div id="bgimg">
    <Link  to='/' className='a'><i className="bi bi-arrow-left-circle"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
				<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
			  </svg></i></Link>
<div className="loginBox"> <img className="user" src={login} height="100px" width="100px"/>

    <h3 id="title">Sign Up Here</h3>
   
    <form  onSubmit={handleSubmit} method="post">
        <div className="inputBox"> 
        <input type="text" name="First_Name" placeholder="Name" id="fname" required
         value={usname}
         onChange={(e) => setName(e.target.value)}/> 
        </div>

        
        <div className="inputBox"> <input type="text" name="Username" placeholder="email" id="uname"
         value={email}
         onChange={(e) => setEmail(e.target.value)}/> 
        
        </div>
        <div className="inputBox"> <input type="password" name="Password" placeholder="Password" id="pass" minLength={8} required
         value={pswd}
         onChange={(e) => setPassword(e.target.value)}/> 
        
         </div>
        <div className="inputBox"> 
        <input type="password" name="Re-password" placeholder="Re-password" id="pass" minLength={8} required/> 
        </div> 
        <input type="submit" name="Signup" value="Sign-up"/>
    </form>   <Link  to='/lg' className='a'>   Sign-up</Link>
</div>
    
   </div>
  )
}

export default Registration