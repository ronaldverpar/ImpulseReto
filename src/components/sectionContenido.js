import React from 'react';
import { Link, navigate } from 'gatsby';
import './sectionContenido.css'

class SectionContenido extends React.Component {

    state = {
        isBoxVisible: false
    };

    toggleBox = () => {
        navigate("/#tipo_piel/")
        console.log(window.location.hash)
        if (window.location.hash === '#tipo_piel') {
            this.setState({ isBoxVisible: true })
        } else {
            //this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
        }
    };

    render() {
        return (
            <div className="SectionGroup">
                <div className="SectionContainer">
                    <h2>Tabla de contenidos</h2>
                    <div className="SectionContent">
                        <div className="SectionItems">
                            <Link id="link_tipo_piel" to="/#tipo_piel">
                                <div className="SectionItem">
                                    <a>1.</a><a className="SectionLink">¿Cómo identifico mi color de piel?</a>
                                </div>
                            </Link>
                            <Link id="link_protejo_sol" to="/#protejo_sol">
                                <div className="SectionItem">
                                    <a>2.</a><a className="SectionLink">¿A qué hora me afecta más el sol?</a>
                                </div>
                            </Link>
                            <Link id="link_protejo_sol" to="/#protejo_sol">
                                <div className="SectionItem">
                                    <a>3.</a><a className="SectionLink">¿Cómo me protejo del sol?</a>
                                </div>
                            </Link>
                            <Link id="link_identificar_lunar" to="/#identificar_lunar">
                                <div className="SectionItem">
                                    <a>4.</a><a className="SectionLink">¿Qué es el cáncer de piel?</a>
                                </div>
                            </Link>
                            <Link id="link_tratar_cancer" to="/#tratar_cancer">
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

