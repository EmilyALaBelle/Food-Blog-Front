import React from 'react'
import './AboutUs.css'
import images from '../../constants/images'

const AboutUs = () => {
  return (
    <div className='app__aboutus' id='about'>
      <div className='app__aboutus-container'>
        <div className='app__aboutus-body'>
          <div className='app__aboutus-intro'>
            <div className='app__aboutus-header'>
              <h2>About Us</h2>
            </div>
            <div className='app__aboutus-description'>
              <p>A chef is a trained professional cook and tradesman who is proficient in all aspects of food preparation...</p>
            </div>
          </div>
          <div className='app__aboutus-button'>
            <button className='button-18' type='button'>Read More</button>
          </div>
        </div>
        <div className='app__aboutus-image'>
          <img src={images.citrusTarteEdit} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs