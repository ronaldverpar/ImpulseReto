import React from 'react'
import './cardTipoPiel.css'

const CardTipoPiel = props => (
    <div className={props.activeCardTipoPiel ? "TipoPielBox" : "TipoPielBoxSmall"}>
        <div className="TipoPielBoxColor" style={props.styleface} />
        <div className="TipoPielBoxFace">
            <img src={props.image} />
        </div>
        <div className={props.activeCardTipoPiel ? "TipoPielBoxInfo" : "TipoPielBoxInactive"}>
            <div className="TipoPielBoxTitle">
                <h4>{props.title}</h4>
                <h5>{props.subtitle}</h5>
            </div>
            <p>{props.info}</p>
        </div>
    </div>
)

export default CardTipoPiel