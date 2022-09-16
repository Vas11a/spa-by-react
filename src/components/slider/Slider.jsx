import React, { useState } from 'react'
import arrImg from './uiSl/arr.png'

import './style.scss';

const slides = 3;
let width = 1200;




let currentSlide = 1;
let downButtons = ((slides * 20) + ((slides-1)*10))/2;



export default function Slider({sliderIm}) {
  if (window.innerWidth < 1400) width = 1000;
  if (window.innerWidth < 1120) width = 800;
  if (window.innerWidth < 900) width = 650;
  if (window.innerWidth < 750) width = 500;
  if (window.innerWidth < 560) width = 320;
  if (window.innerWidth < 380) width = 280; 

  const [page, setPage] = useState(0)

  let arr =[]
    function numToArr(num) {
    let i = 1;
    while (i <= num) {
      arr.push(i)
      i++
    }
  }
  numToArr(slides)

  function left() {
    if (currentSlide === 1) return 
    currentSlide --
    setPage(page + width)
  }

  function right() {
    if (currentSlide === slides) return
    currentSlide ++
    setPage(page - width)
  }

  function downClick(element) {
    currentSlide = element+1
    setPage(-width * element)
  } 

  React.useEffect(() =>{
    if (window.innerWidth < 1400) width = 1000;
    if (window.innerWidth < 1120) width = 800;
    if (window.innerWidth < 900) width = 650;
    if (window.innerWidth < 750) width = 500;
    if (window.innerWidth < 560) width = 320;
    if (window.innerWidth < 380) width = 280; 
  }, [page])

  return (
    <div>
        <div className="slider-container" style={{'width': width}}>
          <div className="slider-content" style={{'left': page, 'minWidth': width}}>
            <div className="slider-el" style={{'width': width}}>
              <img src={sliderIm} className='slider-img' alt="" />
            </div>
            <div className="slider-el" style={{'width': width}}>
              <img src={sliderIm} className='slider-img' alt="" />
            </div>
            <div className="slider-el" style={{'width': width}}>
              <img src={sliderIm} className='slider-img' alt="" />
            </div>
          </div>
          <img src={arrImg} alt="<" onClick={left} className="button left" />
          <img src={arrImg} alt=">" onClick={right} className="button right" />
          <div className="downButtonsBlock" style={{'left': `calc(50% - ${downButtons}px)`}}>
            {
              arr.map((elem,idx) => <div key={idx} onClick={() => downClick(elem-1)} className="downBut"></div>)
            }
          </div>
        </div>
       
    </div>
  )
}

