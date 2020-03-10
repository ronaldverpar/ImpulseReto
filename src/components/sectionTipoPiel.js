import React from 'react'
import './sectionTipoPiel.css'

class SectionTipoPiel extends React.Component {
    render () {
        return (
            <div className="TipoPiel">
                <div className="TipoPielHeader">
                    <h2 className="SectionTitle">¿Cómo <a>identifico</a> mi tipo de piel?</h2>
                    <p className="SectionInfo">Cada tipo de piel reacciona distinto a los efectos del sol. Identifica cuál es la tuya y cómo protegerte.</p>
                </div>
                <div className="TipoPielBody">
                    <div className="TipoPielContainer">
                        <div className="TipoPielBox">
                            <div className="TipoPielBoxColor Face1" />
                            <div className="TipoPielBoxFace">
                                <img src={require('../images/face1.png')} />
                            </div>
                            <div className="TipoPielBoxInfo">
                                <div className="TipoPielBoxTitle">
                                    <h4>Tipo III</h4>
                                    <h5>Ligeramente morenos</h5>
                                </div>
                                <p>A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionTipoPiel