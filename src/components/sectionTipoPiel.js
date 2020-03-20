import React from 'react'
import './sectionTipoPiel.css'
import ItemsTipoPiel from './itemsTipoPiel'
import CardTipoPiel from './cardTipoPiel';

class SectionTipoPiel extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        const ItemTipoPiel = [
            {
                "id": "1",
                "styleface": { backgroundColor: "#D8BBA9" },
                "image": require('../images/face1.png'),
                "title": "Tipo I",
                "subtitle": "Ligeramente morenos",
                "info": "A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15."
            },
            {
                "id": "2",
                "styleface": { backgroundColor: "#D6AA8D" },
                "image": require('../images/face2.png'),
                "title": "Tipo II",
                "subtitle": "Ligeramente morenos",
                "info": "A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15."
            },
            {
                "id": "3",
                "styleface": { backgroundColor: "#C78D75" },
                "image": require('../images/face3.png'),
                "title": "Tipo III",
                "subtitle": "Ligeramente morenos",
                "info": "A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15."
            },
            {
                "id": "4",
                "styleface": { backgroundColor: "#96634E" },
                "image": require('../images/face4.png'),
                "title": "Tipo IV",
                "subtitle": "Ligeramente morenos",
                "info": "A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15."
            },
            {
                "id": "5",
                "styleface": { backgroundColor: "#664D48" },
                "image": require('../images/face5.png'),
                "title": "Tipo V",
                "subtitle": "Ligeramente morenos",
                "info": "A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15."
            },
            {
                "id": "6",
                "styleface": { backgroundColor: "#3B3C37" },
                "image": require('../images/face6.png'),
                "title": "Tipo VI",
                "subtitle": "Ligeramente morenos",
                "info": "A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15."
            },
        ]
        return (
            <div className="TipoPiel">
                <div className="TipoPielHeader">
                    <h2 className="SectionTitle">¿Cómo <a>identifico</a> mi tipo de piel?</h2>
                    <p className="SectionInfo">Cada tipo de piel reacciona distinto a los efectos del sol. Identifica cuál es la tuya y cómo protegerte.</p>
                </div>
                <div className="TipoPielBody">
                    <div className="TipoPielContainer">
                        <div className="TipoPielCards">
                            {ItemTipoPiel.map((item) => (
                                <div>
                                    <CardTipoPiel
                                        key={item.id}
                                        id={item.id}
                                        styleface={item.styleface}
                                        image={item.image}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        info={item.info}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionTipoPiel