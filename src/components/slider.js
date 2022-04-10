import React from 'react'
import Slider from 'react-slick'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import skill_one from '../assets/skills/skills1.png'
import skill_two from '../assets/skills/skills2.png'
import skill_three from '../assets/skills/skills3.png'
import skill_four from '../assets/skills/skills4.png'
import skill_five from '../assets/skills/skills5.png'
import skill_six from '../assets/skills/skills6.png'
import skill_seven from '../assets/skills/skills7.png'
import skill_eight from '../assets/skills/skills8.png'
import skill_nine from '../assets/skills/skills9.png'

const images = [
    {
        id: 1,
        path: skill_one,
    },
    {
        id: 2,
        path: skill_two,
    },
    {
        id: 3,
        path: skill_three,
    },
    {
        id: 4,
        path: skill_four,
    },
    {
        id: 5,
        path: skill_five,
    },
    {
        id: 6,
        path: skill_six,
    },
    {
        id: 7,
        path: skill_seven,
    },
    {
        id: 8,
        path: skill_eight,
    },
    {
        id: 9,
        path: skill_nine,
    }
]

function Sliders() {

    const settings = {
        // dots: false,
        lazyLoad: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 0,
        cssEase: "linear"
    };

    const style = {
        width: '180px',
        height: '200px',
        marginRight: '10px',
        marginTop: '80px',
        border: 'none', // *** para que no se vea el borde *** // 
        boxShadow: 'none'
    }

    const styleimage = {
        display: 'flex',
        justify: 'center',
        align: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    }

    return (

        <div className="container">
            <Slider {...settings}>
                {images.map(images=> {
                    return(
                        <div className="row justify-content-md-center" key={images.id}>
                        <Card className="slider-card" style={style}>
                            <Card.Img style={styleimage} variant="top" src={images.path} />
                        </Card>
                        </div>
                    );
                })}
            </Slider>
        </div>
    )
}

export default Sliders
