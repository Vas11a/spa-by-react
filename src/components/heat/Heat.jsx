import React from 'react'
import Menu from '../menu/Menu'
import {Link} from 'react-router-dom'
import './heat.scss'

export default function Heat() {
  return (
    <div>
        <div className="menue-block">
            <Link to='/' className="logo">BIO <br></br> CWT</Link>
            <Menu></Menu>
        </div>
    </div>
  )
}
