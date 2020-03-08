import React from 'react'
import './sectionIdentificarLunar.css'

class SectionIdentificarLunar extends React.Component {
    render () {
        return (
            <div className="IdentificarLunar">
                <div className="IdentificarLunarContent">
                    <div className="IdentificarLunarInfo">
                        <h2 className="SectionTitle">¿Cómo identificar un lunar cancerígeno?</h2>
                        <p className="SectionInfo">Hemos preparado una guía completa sobre los lunares, sus formas, zonas frecuentes y señales de riesgo.</p>
                        <button className="MainButton">Ir al blog</button>
                    </div>
                    <div className="IdentificarLunarImage">
                        <img src={require('../images/cta-guia-piel.png')} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionIdentificarLunar