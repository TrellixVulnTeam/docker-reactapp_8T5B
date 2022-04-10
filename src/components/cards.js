import React from 'react'
import Card from "./card";
import '../styles/cards.css'


import image1 from '../assets/UberIMG.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'


const cards = [
    {
        id: 1,
        title: 'Ecommerce',
        image: image2,
        url: 'http://google.com',
        text: 'This is an API allows us to visualize the weather in different cities of the world'
    },
    {
        id: 2,
        title: 'Uber Clone',
        image: image1,
        url: 'http://google.com',
        text: 'I made this site using React, Tailwind as a style framework and Mapbox API to the entire functionality of the map'
    },
    {
        id: 3,
        title: 'Weather API',
        image: image3,
        url: 'http://google.com',
        text: 'This is an API allows us to visualize the weather in different cities of the world'
    },
    {
        id: 4,
        title: 'API Weather',
        image: image2,
        url: 'http://google.com',
        text: 'This is an API allows us to visualize the weather in different cities of the world'
    }
]

function Cards() {
    console.log(cards)
    return (
        <div className="cards-container">
            <h2 class="heading heading-sec heading-sec__mb-med">
                <span class="heading-sec__main">My lastest proyects</span>
                <span class="heading-sec__sub">
                    Here you will find more information about me, what I do, and my
                    current skills mostly in terms of programming and technology
                </span>
            </h2>   
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-3" key={card.id}>
                            <Card className="card-portfolio" title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
