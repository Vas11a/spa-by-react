import React from 'react'
import './about.scss'
import Heat from '..//heat/Heat'
import Company from '..//company/Company'
import sliderImg from '..//slider/uiSl/sliderIm.png'
import OurWorks from '..//ourWorks/OurWorks'
import Question from '..//question/Question'
import Footer from '..//footer/Footer'

export default function About() {
  return (
    <div>
        <div className="container galery">
          <div className="hat"></div>
          <Heat></Heat>
          <div className="padd"></div>
          <Company></Company>
          <div className="madd"></div>
          <OurWorks sliderIm={sliderImg} sliderTitle={'Our works'}></OurWorks>
          <div className="padd2"></div>
          <Question></Question>
          <Footer></Footer>
        </div>
    </div>
  )
}
