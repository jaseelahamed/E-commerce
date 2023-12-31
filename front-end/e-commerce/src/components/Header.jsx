import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>
       <section className="navbar">
  <div className="container d_flex">
    <div className="left row">
      <i className="fa fa-phone"></i>
      <label>+88012 3456 7894</label>
      <i className="fa fa-envelope"></i>
      <label>support@ui-lib.com</label>
    </div>
    <div className="right row RText">
      <label>Theme FAQ's</label>
      <label>Need Help?</label>
      <span>🏳️‍⚧️</span>
      <label>EN</label>
      <span>🏳️‍⚧️</span>
      <label>USD</label>
    </div>
  </div>
</section>

    </div>
  )
}

export default Header