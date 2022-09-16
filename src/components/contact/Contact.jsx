import React from 'react'
import './contact.scss'
import Footer from '..//footer/Footer'
import Heat from '..//heat/Heat'
import Map from './contactUi/MAP.png'

export default function Contact() {
  return (
    <div>
        <div className="container galery">
          <div className="hat"></div>
          <Heat></Heat>
            <div className="contact-container">
              <div className="text-contact-block">
                <h1 className="question-title contact-title">Contacts</h1>
                <div className="phone-number phone-contacts">+420 000 000 000</div>
                <div className="location loca-contacts">Na Plzeňce 1166/0150 00</div>
              </div>
              <div className="img-contact-block">
                  <img src={Map} alt="" className="img-contacts" />
              </div>
            </div>

          <Footer></Footer>
        </div>
    </div>
  )
}
