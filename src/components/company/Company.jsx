import React from 'react'
import './company.scss'
import companyImg from './companyUi/companyImg.png'

export default function Company() {
  return (
    <div>
        <div className="company-main">
            <div className="left-block">
                <div className="our-work-title">About us</div>
                <div className="main-left-block">
                    <div className="left-block-text">
                       <strong> BIO CWT</strong>  - We manufacture solid wood products according to individual drawings. We make chairs, armchairs, wardrobes, beds and much more in our own workshop, equipped with all the necessary industrial equipment.
                    </div>
                    <div className="left-block-img">
                        <img src={companyImg} alt="" className="comany-img" />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
