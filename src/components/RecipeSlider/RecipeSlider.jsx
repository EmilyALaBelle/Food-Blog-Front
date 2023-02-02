import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { images, data} from '../../constants'
import {Posts} from '../../components'



const sliderImages = [images.hummus, images.eggTeaSandwich, images.southwestSalad]

const RecipeSlider = () => {

  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300
    }
  }

  return (
    <div className='app__slider'>
      <div className='app__gallery-contents'>
        <div className='app__gallery-contents_container'>
          {data.card.map((card, index) => (
            <Posts key={card.title + index} imgUrl={card.imgUrl} title={card.title} description={card.description} user={card.user} date={card.date} cta={card.cta} />
          ))}
        </div>

      </div>

    </div>
  )
}

export default RecipeSlider