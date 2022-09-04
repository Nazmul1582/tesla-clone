import React, { useState } from 'react'

const Header = () => {
  const [burgerNav, setBurgerNav] = useState(false);
  return (
    <>
        <header className='header'>
            <nav>
              <div className="logo">
                <a href="#"><img src="./images/logo.svg" alt="" /></a>
              </div>
              <div className="menu">
                <ul>
                  <li><a href="#">Model S</a></li>
                  <li><a href="#">Model 3</a></li>
                  <li><a href="#">Model X</a></li>
                  <li><a href="#">Model Y</a></li>
                </ul>
              </div>
              <div className="rightMenu">
                <ul>
                  <li><a href="#"> Shop </a></li>
                  <li><a href="#"> Tesla Account </a></li>
                  <li><a href="#"> 
                    <i onClick={() => setBurgerNav(true)} className="fa-solid fa-bars"></i>
                  </a></li>
                </ul>
              </div>
              <div className={`burgerMenu ${burgerNav ? "open": "close"}`}>
                <div className="closeIcon">
                  <i className="fa-solid fa-xmark" onClick={() => setBurgerNav(false)}></i>
                </div>
                <ul>
                  <li><a href="#">Model S</a></li>
                  <li><a href="#">Model 3</a></li>
                  <li><a href="#">Model X</a></li>
                  <li><a href="#">Model Y</a></li>
                  <li><a href="#">Solar Roof</a></li>
                  <li><a href="#">Solar Panels</a></li>
                  <li><a href="#">Existing Enventory</a></li>
                  <li><a href="#">Used Enventory</a></li>
                  <li><a href="#">Trede-In</a></li>
                  <li><a href="#">Test Drive</a></li>
                </ul>
              </div>
            </nav>
        </header>
    </>
  )
}

export default Header