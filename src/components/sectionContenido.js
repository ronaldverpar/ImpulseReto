import React from 'react';
import { Link, navigate } from 'gatsby';
import './sectionContenido.css'

class SectionContenido extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isBoxVisible: false
        };
    }
    
    UNSAFE_componentWillMount() {
        window.addEventListener('checkList', this.isList)
    }

    isList = (event) => {
        const pageView = window.location.hash
        if (pageView === "#tipo_piel") {
            this.setState({ isBoxVisible: true })
        }
    }

    render() {
        return (
            <div className="SectionGroup">
                <div className="SectionContainer">
                    <h2>Tabla de contenidos</h2>
                    <div className="SectionContent">
                        <div className="SectionItems">
                            <Link id="link_tipo_piel" to="/#tipo_piel">
                                <div id="element_tipo_piel" className={ this.state.isBoxVisible ? 'SectionItem ActiveLink' : 'SectionItem'}>
                                    <p>1.</p><p className="SectionLink">¿Cómo identifico mi color de piel?</p>
                                    {/* <a>1.</a><a className="SectionLink">¿Cómo identifico mi color de piel?</a> */}
                                </div>
                            </Link>
                            <Link id="link_protejo_sol" to="/#protejo_sol">
                                <div className="SectionItem">
                                    <p>2.</p><p className="SectionLink">¿A qué hora me afecta más el sol?</p>
                                    {/* <a>2.</a><a className="SectionLink">¿A qué hora me afecta más el sol?</a> */}
                                </div>
                            </Link>
                            <Link id="link_protejo_sol" to="/#protejo_sol">
                                <div className="SectionItem">
                                    <p>3.</p><p className="SectionLink">¿Cómo me protejo del sol?</p>
                                </div>
                            </Link>
                            <Link id="link_identificar_lunar" to="/#identificar_lunar">
                                <div className="SectionItem">
                                    <p>4.</p><p className="SectionLink">¿Qué es el cáncer de piel?</p>
                                </div>
                            </Link>
                            <Link id="link_tratar_cancer" to="/#tratar_cancer">
                                <div className="SectionItem">
                                    <p>5.</p><p className="SectionLink">¿Cómo se trata el cáncer de piel?</p>
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

