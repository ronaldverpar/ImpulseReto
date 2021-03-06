import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/sectionContenido.css"

import SectionContenido from "../components/sectionContenido"
import SectionTipoPiel from "../components/sectionTipoPiel"
import SectionProtejoSol from "../components/sectionProtejoSol"
import SectionIdentificarLunar from "../components/sectionIdentificarLunar"
import SectionTratarCancer from "../components/sectionTratarCancer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroContainer">
        <div className="HeroGroup">
          <h1>
            Tu piel tiene <a style={{ color: `#00AAC8` }}>memoria</a>
          </h1>
          <p className="HeroInfo">
            La exposición solar inadecuada y sin protección se acumula en
            nuestra piel y perdura en ella de por vida.
          </p>
          <p className="Hashtag">#PielesConMemoria</p>
          <button className="MainButton">Descarga Guía</button>
        </div>
      </div>
      <div className="Indicator">
        <Link id="link_tipo_piel" to="#tabla_contenido">
          <div className="IndicatorArrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.393"
              height="34.286"
              viewBox="0 0 21.393 34.286"
            >
              <path
                id="Path_6697"
                data-name="Path 6697"
                d="M175.842,160.18l9.076-9.946a1.881,1.881,0,0,0,0-2.5,1.509,1.509,0,0,0-2.279,0l-6.323,6.929v-26.49a1.627,1.627,0,1,0-3.241,0v26.476l-6.323-6.929a1.509,1.509,0,0,0-2.279,0,1.881,1.881,0,0,0,0,2.5l9.076,9.946a1.536,1.536,0,0,0,1.146.52A1.521,1.521,0,0,0,175.842,160.18Z"
                transform="translate(-164 -126.4)"
                fill="#f08d24"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
    <div
      id="tabla_contenido"
      className="ContenidoSeparador"
      style={{ backgroundColor: "#72A6BF" }}
    />
    <SectionContenido />
    <div
      id="tipo_piel"
      className="ContenidoSeparador"
      style={{ backgroundColor: "#72A6C0" }}
    />
    <SectionTipoPiel />
    <div
      id="protejo_sol"
      className="ContenidoSeparador"
      style={{ backgroundColor: "#FFFFFF" }}
    />
    <SectionProtejoSol />
    <div
      id="identificar_lunar"
      className="ContenidoSeparador"
      style={{ backgroundColor: "#D6F1F6" }}
    />
    <SectionIdentificarLunar />
    <div
      id="tratar_cancer"
      className="ContenidoSeparador"
      style={{ backgroundColor: "#FFFFFF" }}
    />
    <SectionTratarCancer />
  </Layout>
)

export default IndexPage
