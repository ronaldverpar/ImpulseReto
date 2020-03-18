import React from 'react'
import './sectionTipoPiel.css'
import ItemsTipoPiel from './itemsTipoPiel'

class SectionTipoPiel extends React.Component {

    state = {
        statusFace1: true,
        statusFace2: true,
        statusFace3: true,
        statusFace4: true,
        statusFace5: true,
        statusFace6: true
    }

    render () {

        return (
            <div className="TipoPiel">
                <div className="TipoPielHeader">
                    <h2 className="SectionTitle">¿Cómo <a>identifico</a> mi tipo de piel?</h2>
                    <p className="SectionInfo">Cada tipo de piel reacciona distinto a los efectos del sol. Identifica cuál es la tuya y cómo protegerte.</p>
                </div>
                <div className="TipoPielBody">
                    <div className="TipoPielContainer">
                        <ItemsTipoPiel />
                        {/* {this.state.statusFace1 ? 
                            (<div className="TipoPielBoxSmall">
                                <div className="TipoPielBoxColor Face1" />
                                <div className="TipoPielBoxFace">
                                    <img src={require('../images/face1.png')} />
                                </div>
                            </div>)
                            :
                            (<div className="TipoPielBox">
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
                            </div>)
                        }
                        {this.state.statusFace2 ? (
                            <div className="TipoPielBoxSmall">
                                <div className="TipoPielBoxColor Face2" />
                                <div className="TipoPielBoxFace">
                                    <img src={require('../images/face2.png')} />
                                </div>
                            </div>
                        ): (
                            <div className="TipoPielBox">
                                <div className="TipoPielBoxColor Face2" />
                                <div className="TipoPielBoxFace">
                                    <img src={require('../images/face2.png')} />
                                </div>
                                <div className="TipoPielBoxInfo">
                                    <div className="TipoPielBoxTitle">
                                        <h4>Tipo III</h4>
                                        <h5>Ligeramente morenos</h5>
                                    </div>
                                    <p>A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15.</p>
                                </div>
                            </div>
                        )}
                        {this.state.statusFace3 ? (
                            <div className="TipoPielBoxSmall">
                                <div className="TipoPielBoxColor Face3" />
                                <div className="TipoPielBoxFace">
                                    <img src={require('../images/face3.png')} />
                                </div>
                            </div>
                        ) : (
                            <div className="TipoPielBox">
                                <div className="TipoPielBoxColor Face3" />
                                <div className="TipoPielBoxFace">
                                    <img src={require('../images/face3.png')} />
                                </div>
                                <div className="TipoPielBoxInfo">
                                    <div className="TipoPielBoxTitle">
                                        <h4>Tipo III</h4>
                                        <h5>Ligeramente morenos</h5>
                                    </div>
                                    <p>A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15.</p>
                                </div>
                            </div>
                        )}
                        {this.state.statusFace4 ? (
                            <div className="TipoPielBoxSmall">
                                <div className="TipoPielBoxColor Face4" />
                                <div className="TipoPielBoxFace">
                                    <img src={require('../images/face4.png')} />
                                </div>
                            </div>
                        ) : (
                            <div className="TipoPielBox">
                                <div className="TipoPielBoxColor Face4" />
                                <div className="TipoPielBoxFace">
                                    <img src={require('../images/face4.png')} />
                                </div>
                                <div className="TipoPielBoxInfo">
                                    <div className="TipoPielBoxTitle">
                                        <h4>Tipo III</h4>
                                        <h5>Ligeramente morenos</h5>
                                    </div>
                                    <p>A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15.</p>
                                </div>
                            </div>
                        )}
                        {this.state.statusFace5 ? (
                            <div className="TipoPielBoxSmall">
                                <div className="TipoPielBoxColor Face5" />
                                <div className="TipoPielBoxFace">
                                    <img src={require('../images/face5.png')} />
                                </div>
                            </div>
                        ) : (
                            <div className="TipoPielBox">
                                <div className="TipoPielBoxColor Face5" />
                                <div className="TipoPielBoxFace">
                                    <img src={require('../images/face5.png')} />
                                </div>
                                <div className="TipoPielBoxInfo">
                                    <div className="TipoPielBoxTitle">
                                        <h4>Tipo III</h4>
                                        <h5>Ligeramente morenos</h5>
                                    </div>
                                    <p>A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15.</p>
                                </div>
                            </div>
                        )}
                        {this.state.statusFace6 ? (
                            <div className="TipoPielBoxSmall">
                                <div className="TipoPielBoxColor Face6" />
                                <div className="TipoPielBoxFace">
                                    <img src={require('../images/face6.png')} />
                                </div>
                            </div>
                        ) : (
                            <div className="TipoPielBox">
                                <div className="TipoPielBoxColor Face6" />
                                <div className="TipoPielBoxFace">
                                    <img src={require('../images/face6.png')} />
                                </div>
                                <div className="TipoPielBoxInfo">
                                    <div className="TipoPielBoxTitle">
                                        <h4>Tipo III</h4>
                                        <h5>Ligeramente morenos</h5>
                                    </div>
                                    <p>A veces se quema, a veces se broncea. También tiene riesgo de cáncer de piel. Usar un FPS mínimo de 15.</p>
                                </div>
                            </div>
                        )} */}
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionTipoPiel