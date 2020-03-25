import React from "react"
import "./cardTipoPielCarousel.css"

const CardTipoPielCarousel = props => (
  <div
    className={
      props.activeCardTipoPiel
        ? "TipoPielCarouselBox"
        : "TipoPielCarouselBoxSmall"
    }
  >
    <div className="TipoPielCarouselBoxColor" style={props.styleface} />
    <div className="TipoPielCarouselBoxFace">
      <img src={props.image} />
    </div>
    <div
      className={
        props.activeCardTipoPiel
          ? "TipoPielCarouselBoxInfo"
          : "TipoPielCarouselBoxInactive"
      }
    >
      <div className="TipoPielCarouselBoxTitle">
        <h4>{props.title}</h4>
        <h5>{props.subtitle}</h5>
      </div>
      <p>{props.info}</p>
    </div>
  </div>
)

export default CardTipoPielCarousel
