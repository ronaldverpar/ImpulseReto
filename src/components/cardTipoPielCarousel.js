import React from 'react'
import CardTipoPiel from './cardTipoPiel';
import Slider from 'infinite-react-carousel';

export default class CardTipoPielCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            typeSizeScreen: "Small"
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.modifySettings);
    }

    modifySettings = (event) => {
        const screensize = window.innerWidth
        if (screensize < 820 && screensize > 400) {
            this.setState({ typeSizeScreen: "Small" })
        }
         else if (screensize < 400) {
            this.setState({ typeSizeScreen: "VerySmall" })
        }
    }

    render() {
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
            
        )
    }
}