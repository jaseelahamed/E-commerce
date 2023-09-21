import React from 'react'

import './Home.css';
import { Link } from 'react-router-dom';
import './Hbar.css'
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import Header from './Header';
import Hbar from './Hbar';

function Home() {


  return (
    <div>
{/* <Header/> */}

{/* <Hbar/> */}
<div  id="bg1">
<img id="img" className="zpimage zpimage-style-none zpimage-space-none " src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-774.png" size="original" alt="" title="" data-lightbox="true"/>
<div id="disc">
<h5 class="zpheading zpheading-style-none zpheading-align-left animated-heading" data-editor="true">30% off on our Fantastic Summer</h5>
<h2 class="zpheading zpheading-style-none zpheading-align-left animated-heading" data-editor="true">COLLECTIONS!!</h2>

<p class="animated-text">
  Enhance the visual impression of your face to multiple levels.
  Compare our styles on various faces - Quality Promised.
</p>
<Link  to='/reg'>
<button id="button" class="zpbutton-wrapper zpbutton zpbutton-type-secondary zpbutton-size-lg zpbutton-style-oval">
  <a class="zpbutton-link" href="javascript:;" target="_blank">
    <span class="zpbutton-content">SHOP NOW!</span>
    <span class="zpbutton-hover-content">Discover</span>
  </a>
</button></Link>




</div>
</div>
<div>
{/* <span className="zpicon zpicon-common zpicon-size-md zpicon-style-circle "><svg viewBox="0 0 512 513.5" height="512" width="513.5" xmlns="http://www.w3.org/2000/svg"><path d="M0 64h288v64h86.5l5 4.5 96 96 4.5 5V400h-50.5c-7.153 27.518-31.849 48-61.5 48s-54.347-20.482-61.5-48h-133c-7.153 27.518-31.849 48-61.5 48s-54.347-20.482-61.5-48H0V64zm32 32v272h18.5c7.153-27.518 31.849-48 61.5-48s54.347 20.482 61.5 48H256V96H32zm256 64v208h18.5c7.153-27.518 31.849-48 61.5-48s54.347 20.482 61.5 48H448V247l-87-87h-73zM112 352c-17.862 0-32 14.138-32 32s14.138 32 32 32 32-14.138 32-32-14.138-32-32-32zm256 0c-17.862 0-32 14.138-32 32s14.138 32 32 32 32-14.138 32-32-14.138-32-32-32z"></path></svg></span>
<h4 className="zpicon-heading " data-editor="true">Free Shipping</h4> */}

</div>

    </div>
  )
}

export default Home