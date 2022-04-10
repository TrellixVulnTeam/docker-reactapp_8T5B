import "../styles/navbar.css";
import React from 'react'
import { render } from '@testing-library/react'

function Navbar() {
    const slide = (e) => {
        const menu = document.querySelector('.mobile__nav-container')
        const links = document.querySelectorAll('.navLink')
        const blocked = document.querySelector('.blocked')

                if(blocked){
                    menu.style.transform = "translateY(-900px)"
                    menu.classList.remove('blocked')
                    links.forEach(el => {
                        el.style.animation = ''
                    })
                    e.currentTarget.classList.remove('toggle')
                }else{
                    menu.style.transform = "translateY(11px)"
                    menu.style.opacity = "1"
                    menu.classList.add('blocked')
                    links.forEach((el, index) => { 
                        el.style.animation = `navLinkFade 0.1s forwards ${index / 25+1}s`     
                    })
                    e.currentTarget.classList.toggle('toggle')
                }    
    }

    render()

    return (
        <div>
            <nav>
                <div className="burger" onClick={slide}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <div className="mobile__nav-container mb__nav-container-visible">
                    <ul className="ul-nav flex__ul">
                        <li className="li-nav flex__li-item"> <a href="/#home" className="navLink"> Home  </a> </li>
                        <li className="li-nav flex__li-item"> <a href="/#about" className="navLink"> About </a> </li>
                        <li className="li-nav flex__li-item"> <a href="/#port" className="navLink"> Portfolio </a></li>
                        <li className="li-nav flex__li-item"> <a href="/#contact" className="navLink"> Contact  </a> </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
