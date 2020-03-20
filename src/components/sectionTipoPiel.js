import React from 'react'
import './sectionTipoPiel.css'
import CardTipoPiel from './cardTipoPiel';
import Slider from 'infinite-react-carousel';
import CardTipoPielCarousel from './cardTipoPielCarousel';
import { IconSwipe } from './icons';

class SectionTipoPiel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            typeSizeScreen: "Normal"
        }
    }


    componentDidMount() {
        window.addEventListener("resize", this.modifySettings);

        this.modifySettings()
    }

    modifySettings = (event) => {
        const screensize = window.innerWidth
        if (screensize > 1080) {
            this.setState({ typeSizeScreen: "Normal" })
        }
         else {
            this.setState({ typeSizeScreen: "VerySmall" })
        }
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

        //Cuando el tamanio de la pantalla cambia se hara uso del scroll
        //Cuando el tamanio de la pantalla es menor 680px
        const settings =  {
            arrows: false,
            centerMode: true,
            dots: true,
            initialSlide: true,
            centerPadding: 80,
        };
        //Cuando el tamanio de la pantalla es menor a 400px
        const settingsSmall =  {
            arrows: false,
            centerMode: true,
            dots: true,
            initialSlide: true,
            centerPadding: 20,
        };
        
        return (
            <div className="TipoPiel">
                <div className="TipoPielHeader">
                    <h2 className="SectionTitle">¿Cómo <a>identifico</a> mi tipo de piel?</h2>
                    <p className="SectionInfo">Cada tipo de piel reacciona distinto a los efectos del sol. Identifica cuál es la tuya y cómo protegerte.</p>
                </div>
                <div className="TipoPielBody">
                    <div className="TipoPielIcon">
                        <IconSwipe />
                    </div>
                    <div className="TipoPielContainer">
                        {this.state.typeSizeScreen === "Normal" ? (
                            <div className="TipoPielCards">
                                {ItemTipoPiel.map((item) => (
                                    <div key={item.id}>
                                        <CardTipoPiel
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
                        ) : (
                            <Slider { ...settingsSmall }>
                                { ItemTipoPiel.map((item, index) => (
                                    <div key={index}>
                                        <CardTipoPielCarousel
                                            activeCardTipoPiel={true}
                                            styleface={item.styleface}
                                            image={item.image}
                                            title={item.title}
                                            subtitle={item.subtitle}
                                            info={item.info}
                                        />
                                    </div>
                                )) }
                            </Slider>
                        ) }
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionTipoPiel