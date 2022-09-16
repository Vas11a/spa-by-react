import React from 'react'
import './price.scss'
import Heat from '..//heat/Heat'
import OurWorks from '..//ourWorks/OurWorks'
import Footer from '..//footer/Footer'
import Question from '..//question/Question'
import sliderImg from './priceUi/sliderIm.png'

export default function price() {
  return (
    <div>
        <div className="container galery">
          <div className="hat"></div>
          <Heat></Heat>
          <div className="padd"></div>
          <OurWorks sliderIm={sliderImg} sliderTitle={'Price List'}></OurWorks>
          <div className="padd2"></div>
          <Question></Question>
          <Footer></Footer>
        </div>
    </div>
  )
}
