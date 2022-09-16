import React from 'react'
import './button.scss'

export default function Button({txt}) {
  return (
    <div>
        <button className="header-button">{txt}</button>
    </div>
  )
}
