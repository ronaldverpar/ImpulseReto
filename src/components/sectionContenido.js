import React from 'react';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import './sectionContenido.css'

class SectionContenido extends React.Component {
    render() {
        return (
            <div className="SectionGroup">
                <div className="SectionContainer">
                    <h2>Tabla de contenidos</h2>
                    <div className="SectionContent">
                        <div className="SectionItems">
                            <Link to="/#tipo_piel" activeStyle={{ color: "#056082" }}>
                                <div className="SectionItem">
                                <a>1.</a><a className="SectionLink">¿Cómo identifico mi color de piel?</a>
                                </div>
                            </Link>
                            <Link to="/#protejo_sol">
                                <div className="SectionItem">
                                    <a>2.</a><a className="SectionLink">¿A qué hora me afecta más el sol?</a>
                                </div>
                            </Link>
                            <Link to="/#protejo_sol">
                                <div className="SectionItem">
                                    <a>3.</a><a className="SectionLink">¿Cómo me protejo del sol?</a>
                                </div>
                            </Link>
                            <Link to="/#identificar_lunar">
                                <div className="SectionItem">
                                    <a>4.</a><a className="SectionLink">¿Qué es el cáncer de piel?</a>
                                </div>
                            </Link>
                            <Link to="/#tratar_cancer">
                                <div className="SectionItem">
                                    <a>5.</a><a className="SectionLink">¿Cómo se trata el cáncer de piel?</a>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionContenido

