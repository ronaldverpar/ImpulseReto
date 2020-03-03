import React from 'react'
import './card.css'

const Card = props => (
    <div className="Card">
        <div className="CardContainer">
            <img src={props.image} />
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    </div>
)

export default Card