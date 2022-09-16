import React from 'react'
import './home.scss'
import Heat from '../heat/Heat'
import Button from '../button/Button'
import sliderImg from '..//slider/uiSl/sliderIm.png'
import WoodWorks from '../woodWorks/WoodWorks'
import Company from '../company/Company'
import Advant from '../advantages/Advant'
import Footer from '../footer/Footer'
import OurWorks from '../ourWorks/OurWorks'
import Question from '../question/Question'
import im1 from './homeUi/image.png'
import fon from './homeUi/fon.jpg'
import im2 from './homeUi/image-1.png'
import im3 from './homeUi/image-2.png'

export default function Home() {
  return (
    <div>
       <div className="container">
        <header className="header">
            <Heat></Heat>
            <div className="header-block">
                <div className="block-text">
                    <h1 className="header-title">Solid  wood products</h1>
                    <div className="header-sub-title">Oak, beech, ash from <strong>1700 CZK</strong> per m3</div>
                    <Button txt='Order'></Button>
                </div>
                <div className="block-photo">
                    <img src={im1} alt="" className='imgHead'/>
                    <img src={im2} alt="" className='imgHead'/>
                    <img src={im3} alt="" className='imgHead'/>
                </div>
            </div>
            <img src={fon} className='fonHome' alt="" />
        </header>
        <WoodWorks></WoodWorks>
        <OurWorks sliderIm={sliderImg} sliderTitle={'Our works'}></OurWorks>
        <Advant></Advant>
        <Company></Company>
        <Question></Question>
        <Footer></Footer>
       </div>
    </div>
  )
}
