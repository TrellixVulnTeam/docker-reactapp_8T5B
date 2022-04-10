import React from 'react'
import Typed from "./typed";

function Presentation() {
    return (       
        <div className="text-box">
          <h1>I'm {' '}
          <span >
            Manuel Beledo
          </span>

          </h1>
          <p className="typed-text">
          <Typed/>
          </p>
          <p className="intro-paragraph">
            You can contact me if you need any help in making a <br /> website
            for you or your business
          </p>
          <div className="buttons">
            <a href="#about">
                <button type="button" className="btn btn-outline-info">
                More About Me
                </button>
            </a>
            <a href="#port">
                <button type="button" className="btn btn-outline-info">
                Lastest Proyects
                </button>
            </a>
          </div>
        </div>
    )
}

export default Presentation
