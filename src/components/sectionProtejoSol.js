import React from 'react'
import './sectionProtejoSol.css'
import ProtejoSolCarousel from './ProtejoSolCarousel'

class SectionProtejoSol extends React.Component {
    render () {
        return (
            <div className="ProtejoSol">
                <div className="ProtejoSolContainer">
                    <div className="ProtejoSolHeader">
                        <h2 className="SectionTitle">¿Cómo me <a>protejo</a> del sol?</h2>
                        <p className="ProtejoSolInfo SectionInfo">Los rayos UV traspasan el agua, las ventanas y la ropa. Afortunadamente son muchas las formas que tenemos de protegernos de los riesgos de cáncer de piel.</p>
                    </div>
                    <div className="ProtejoSolBody">
                        <div className="ProtejoSolItems">
                            <ProtejoSolCarousel />
                        </div>
                    </div>
                    <div className="ProtejoSolFooter">
                        <p className="ProtejoSolInfo SectionInfo">¿Qué otras medidas puedes tomar para cuidarte? Si quieres reducir tu exposición al sol y prevenir el cáncer de piel, visita nuestro blog.</p>
                        <button className="MainButton">Ir al blog</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionProtejoSol