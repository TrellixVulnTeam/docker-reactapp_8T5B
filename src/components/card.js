import React from "react";
import "../styles/cards.css";

function Card(props) {
console.log(props);
return (
    <div className="portfolio">
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
        <div className="overflow">
        <img src={props.imageSource} alt="" className="card-img-top" />
        </div>
        <div className="card-body text-light">
        <h4 className="card-title">{props.title}</h4>
        <p className="class-text text-secondary">{props.text}</p>
        <a href={props.url} className="btn btn-outline-secondary rounded-0" rel="noreferrer" target="_blank">Go to this website</a>
        </div>
    </div>
    </div>
);
}

export default Card;
