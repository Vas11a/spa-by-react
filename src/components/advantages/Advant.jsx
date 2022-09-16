import React from 'react'
import './advant.scss'
import advImg from './advantUi/video.png'
import Button from '..//button/Button'

export default function Advant() {
  return (
    <div>
        <div className="advant-block">
            <div className="our-work-title adv-title">Advantages working with us</div>
            <div className="advant-main">
                <div className="adv-img-block">
                <img src={advImg} alt="" className="asv-img" />
                </div>
                <div className="advant-texts">
                    <p className="advant-text">In-house carpentry production</p>
                    <p className="advant-text">We only treat wood with environmentally friendly and safe products</p>
                    <p className="advant-text">Prices from the manufacturer, no extra charges</p>
                </div>
            </div>
            <div className="adv-btn-block">
                <Button txt='Receive a consultation'></Button>
            </div>
        </div>
    </div>
  )
}
