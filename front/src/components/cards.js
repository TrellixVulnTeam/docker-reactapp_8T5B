import React from 'react'
import Card from "./card";
import '../styles/cards.css'
import '../styles/portfolio.css'


import image2 from '../assets/image2.jpg'
import image4 from '../assets/image5.jpg'
import image5 from '../assets/ubernew.jpg'
import image6 from '../assets/weather.png'

const cards = [
    {
        id: 1,
        title: 'Ecommerce',
        image: image4,
        url: 'https://proyect-ecommerce-manubeledo.herokuapp.com/api/index',
        text: 'Backend with express, socket.io and Vanilla JS'
    },
    {
        id: 2,
        title: 'Uber Clone',
        image: image5,
        url: 'https://uberappnextjs.herokuapp.com/',
        text: 'Site made using NextJS, Tailwind and Mapbox'
    },
    {
        id: 3,
        title: 'Weather API',
        image: image6,
        url: 'https://serene-reef-95064.herokuapp.com/',
        text: 'Site made using Vanilla JS'
    },
    {
        id: 4,
        title: 'API Weather',
        image: image2,
        url: 'http://google.com',
        text: 'Site made using React, Tailwind and Mapbox'
    }
]

function Cards() {
    console.log(cards)
    return (
        <section id="port" className="projects sec-pad">
        <div className="cards-container">
            <h2 className="heading heading-sec heading-sec__mb-med">
                <span className="heading-sec__main">My lastest proyects</span>
                <span className="heading-sec__sub">
                    Here you will find more information about me, what I do, and my
                    current skills mostly in terms of programming and technology
                </span>
            </h2>   
            <div className="row cards-box">
                {
                    cards.map(card => (
                        <div className="col-md-3" key={card.id}>
                            <Card className="card-portfolio" title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
                        </div>
                    ))
                }
            </div>
        </div>
        </section>
    )
}

export default Cards
