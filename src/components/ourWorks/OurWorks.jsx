import React from 'react'
import './ourWorks.scss'
import Slider from '../slider/Slider'

export default function OurWorks({sliderIm, sliderTitle}) {
  return (
    <div>
        <div className="our-works">
            <div className="our-work-title">{sliderTitle}</div>
            <Slider sliderIm={sliderIm}></Slider>
        </div>
    </div>
  )
}
