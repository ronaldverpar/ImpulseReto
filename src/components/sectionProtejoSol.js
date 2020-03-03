import React from 'react'
import Card from './card'
import './sectionProtejoSol.css'

class SectionProtejoSol extends React.Component {
    render () {
        return (
            <div className="ProtejoSol">
                <div className="ProtejoSolContainer">
                    <div className="ProtejoSolHeader">
                        <h2 className="SectionTitle">¿Cómo me <a>protejo</a> del sol?</h2>
                        <p className="SectionInfo">Los rayos UV traspasan el agua, las ventanas y la ropa. Afortunadamente son muchas las formas que tenemos de protegernos de los riesgos de cáncer de piel.</p>
                    </div>
                    <div className="ProtejoSolBody">
                        <Card 
                            image={require('../images/sweater.png')}
                            title="Ropa especial"
                            text="Tienen un factor de protección a la radiación ultravioleta (UPF). Si la etiqueta indica 1800 UPF significa que solo permite que 1/1800 de rayos ultravioleta lleguen a la piel."
                        />
                        <Card 
                            image={require('../images/jeans.png')}
                            title="Ropa adecuada"
                            text="Las telas gruesas, camisas manga larga, pantalones y faldas largas protegen mucho más. Igual los colores oscuros. Si puedes ver la luz a través de la tela, los rayos UV también lo harán."
                        />
                        <Card 
                            image={require('../images/sunglasses.png')}
                            title="Lentes de sol"
                            text="No escatimes en su calidad, invierte lo necesario en la protección de tus ojos y la piel de tus párpados. Debes protegerlos al 100% de los rayos UVA y UVB."
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionProtejoSol