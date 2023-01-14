import React from 'react'
import images from '../../constants/images'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className='app__navbar'>
        <div className='app__navbar-logo'>
          <img src={images.logo} alt="logo" />
        </div>
        <ul className='app__navbar-links'>
          <li className='app__navbar-link'><a href="#home">Home</a></li>
          <li className='app__navbar-link'><a href="#blog">Blog</a></li>
          <li className='app__navbar-link'><a href="#about">About</a></li>
          <li className='app__navbar-link'><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className='background__image'>
      <div className='app__hero-header'>
        <h1 >Welcome To My Blog</h1>
      </div>
      </div>
    </>
  )
}

export default Navbar