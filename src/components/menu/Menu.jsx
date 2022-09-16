import React from 'react'
import {Link} from 'react-router-dom'
import open from './uiMenu/menu.png'
import close from './uiMenu/menu2.png'
import './style.scss'
import { useState } from 'react'



export default function Menu() {
  const [menu, setMenu] = useState(false);
  let linksArr = ['Galery', 'Price' ,'About us','Contact'];
  let ways = ['/galery' , '/price', '/about', '/contact' ];

  function openClose() {
    setMenu(menu ? false : true);
  }

  return (
    <div className='cntainer'>
      <div className={ menu ? 'visib content'  : 'content'}>
        {
          linksArr.map((elem,idx) => <Link 
          to={ways[idx] || '/'} 
          key={idx} 
          onClick = {() => setMenu(false)}
          className='link'>{elem}</Link> )
        }
      </div>
      <div className="menu-button" onClick={openClose}>
          <img src={open} alt="open" className={menu ? 'button dNone' : 'button'} />
          <img src={close} alt="close" className={menu ? 'button' : 'button dNone'} />
      </div>
    </div>
  )
}
