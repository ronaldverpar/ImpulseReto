import React, { Component } from "react"
import Slider from "infinite-react-carousel"
import CardTipoPiel from "./cardTipoPiel"

export default class ItemsTipoPiel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasSizeChange: false,
    }
  }

  render() {
    const settings = {
      adaptiveHeight: true,
      arrows: false,
      slidesToShow: 6,
    }

    const settingsSmall = {
      arrows: false,
      centerMode: true,
      centerPadding: 100,
      initialSlide: true,
    }

    return (
      <div>
        <Slider {...settingsSmall}>
          <div style={{ alignItems: "center" }}>
            <CardTipoPiel
              activeCardTipoPiel={false}
              styleface={{ backgroundColor: "#D8BBA9" }}
              image={require("../images/face1.png")}
              title="Tipo I"
              subtitle="Ligeramente morenos"
              info="A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15."
            />
          </div>
          <div>
            <CardTipoPiel
              activeCardTipoPiel={false}
              styleface={{ backgroundColor: "#D6AA8D" }}
              image={require("../images/face2.png")}
              title="Tipo II"
              subtitle="Ligeramente morenos"
              info="A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15."
            />
          </div>
          <div>
            <CardTipoPiel
              activeCardTipoPiel={true}
              styleface={{ backgroundColor: "#C78D75" }}
              image={require("../images/face3.png")}
              title="Tipo III"
              subtitle="Ligeramente morenos"
              info="A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15."
            />
          </div>
          <div>
            <CardTipoPiel
              activeCardTipoPiel={false}
              styleface={{ backgroundColor: "#96634E" }}
              image={require("../images/face4.png")}
              title="Tipo IV"
              subtitle="Ligeramente morenos"
              info="A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15."
            />
          </div>
          <div>
            <CardTipoPiel
              activeCardTipoPiel={false}
              styleface={{ backgroundColor: "#664D48" }}
              image={require("../images/face5.png")}
              title="Tipo V"
              subtitle="Ligeramente morenos"
              info="A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15."
            />
          </div>
          <div>
            <CardTipoPiel
              activeCardTipoPiel={false}
              styleface={{ backgroundColor: "#664D48" }}
              image={require("../images/face6.png")}
              title="Tipo VI"
              subtitle="Ligeramente morenos"
              info="A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15."
            />
          </div>
        </Slider>
      </div>
    )
  }
}
