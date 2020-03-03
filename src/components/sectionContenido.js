import React from 'react';
import { Link } from 'gatsby';
import './sectionContenido.css'

class SectionContenido extends React.Component {
    render() {
        return (
            <div className="SectionGroup">
                <div className="SectionContainer">
                    <h2>Tabla de contenidos</h2>
                    <div className="SectionContent">
                        <a className="SectionLink">1. ¿Cómo identifico mi color de piel?</a>
                        <a className="SectionLink">2.¿A qué hora me afecta más el sol?</a>
                        <a className="SectionLink">3.¿Cómo me protejo del sol?</a>
                        <a className="SectionLink">4.¿Qué es el cáncer de piel?</a>
                        <a className="SectionLink">5.¿Cómo se trata el cáncer de piel?</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionContenido

