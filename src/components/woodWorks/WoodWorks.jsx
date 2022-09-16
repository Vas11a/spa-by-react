import React from 'react'
import './woodWorkc.scss'
import ui1 from './woodWorksUi/ui1.png'
import ui2 from './woodWorksUi/ui2.png'
import ui3 from './woodWorksUi/ui3.png'

export default function WoodWorks() {
  return (
    <div>
        <div className="woodWorks">
            <h1 className="wood-title">THE WOOD WE <br/> WORK WITH</h1>
            <div className="blocks-wood">
                <div className="block-wood">
                  <img src={ui1}alt="" className="img-wood" />
                  <div className="wood-name">Oak</div>
                  <div className="wood-like">Water resistance</div>
                  <div className="wood-dis">Expensive</div>
                </div>
                <div className="block-wood">
                  <img src={ui2}alt="" className="img-wood" />
                  <div className="wood-name">Buk</div>
                  <div className="wood-like">Durability</div>
                  <div className="wood-dis">Hard to handle</div>
                </div>
                <div className="block-wood">
                  <img src={ui3}alt="" className="img-wood" />
                  <div className="wood-name">Ash</div>
                  <div className="wood-like">Hard to handle</div>
                  <div className="wood-dis">Expensive</div>
                </div>
            </div>
        </div>
    </div>
  )
}
