import React from 'react'
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import {images} from '../../constants'
import './RecipeSlider.css'

const sliderImages = [images.hummus, images.eggTeaSandwich, images.southwestSalad]

const RecipeSlider = () => {

const scrollRef = React.useRef(null)

const scroll = (direction) => {
  const {current} = scrollRef;

  if(direction === 'left') {
    current.scrollLeft -= 300;
  } else {
    current.scrollLeft += 300
  }
}

  return (
    <div className='app__slider'>
      <div className='app__gallery-contents'>
        <div className='app__gallery-contents_container'> 

        </div>

      </div>

    </div>
  )
}

export default RecipeSlider