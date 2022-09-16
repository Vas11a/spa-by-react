import React from 'react'
import fon from './notfoundUI/fon.jpg'
import './notfound.scss'
import Heat from '..//heat/Heat'
import Button from '../button/Button'
import {Link} from 'react-router-dom'

export default function Notfound() {
  return (
    <div>
        <div className='error-cont'>
          <Heat></Heat>
          <img src={fon} alt="" className='fonError'/>
          <div className="error-block">
            <h1 className="error-title">404</h1>
            <div className="error-subtitle">Woops</div>
            <div className="error-minitext">Oh, you must be lost,
              there is no such page.</div>
            <Link to={'/'}><Button txt='Go to home page'></Button></Link>
          </div>
        </div>
    </div>
  )
}
