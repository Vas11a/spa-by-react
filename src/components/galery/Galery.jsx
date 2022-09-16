import React from 'react'
import './galery.scss'
import Heat from '..//heat/Heat'
import OurWorks from '..//ourWorks/OurWorks'
import WoodWorks from '..//woodWorks/WoodWorks'
import Question from '..//question/Question'
import sliderImg from '..//slider/uiSl/sliderIm.png'
import Footer from '..//footer/Footer'

export default function Galery() {
  return (
    <div>
        <div className="container galery">
          <div className="hat"></div>
          <Heat></Heat>
          <div className="padd"></div>
          <OurWorks sliderIm={sliderImg} sliderTitle={'Our works'}></OurWorks>
          <WoodWorks></WoodWorks>
          <div className="padd2"></div>
          <Question></Question>
          <Footer></Footer>
        </div>
    </div>
  )
}
