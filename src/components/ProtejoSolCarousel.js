import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import Card from './card'

export default class ProtejoSolCarousel extends React.Component {

    constructor(props) {
        super(props)

        //Catalogar el tipo de pantalla para poder adaptar el carousel 
        this.state = {
            hasSizeChange: false
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.modifySettings);
    }

    modifySettings = (event) => {
        const screensize = window.innerWidth
        if (screensize < 820) {
            this.setState({ hasSizeChange: true })
        } else {
            this.setState({ hasSizeChange: false })
        }
    }

  render() {
    const settingsFull =  {
        adaptiveHeight: true,
        arrowsScroll: 2,
        initialSlide: true,
        centerPadding: 60,
        slidesToShow: 3
      };
 
    const settingsMedium =  {
        adaptiveHeight: true,
        arrowsScroll: 2,
        centerMode: true,
        dots: true,
        dotsScroll: 2,
        slidesToShow: 2
      };
    
    const settingsSmall =  {
        adaptiveHeight: true,
        arrowsScroll: 1,
        dots: true,
        dotsScroll: 1,
        slidesToShow: 1,
        initialSlide: 1,
        centerPadding: 0
      };

    //   this.state.widthScreen < 620 ? settingsSmall : (this.state.widthScreen < 820 ? settingsMedium : settingsFull)
    return (
      <div style={{ alignItems: "center"}}>
      {this.state.hasSizeChange ? (
        <Slider { ...settingsSmall }>
            <div>
                <Card 
                    image={require('../images/jeans.png')}
                    title="Ropa adecuada"
                    text="Las telas gruesas, camisas manga larga, pantalones y faldas largas protegen mucho más. Igual los colores oscuros. Si puedes ver la luz a través de la tela, los rayos UV también lo harán."
                />
            </div>
            <div>
                <Card 
                    image={require('../images/sweater.png')}
                    title="Ropa especial"
                    text="Tienen un factor de protección a la radiación ultravioleta (UPF). Si la etiqueta indica 1800 UPF significa que solo permite que 1/1800 de rayos ultravioleta lleguen a la piel."
                />
            </div>
            <div>
                <Card 
                    image={require('../images/sunglasses.png')}
                    title="Lentes de sol"
                    text="No escatimes en su calidad, invierte lo necesario en la protección de tus ojos y la piel de tus párpados. Debes protegerlos al 100% de los rayos UVA y UVB."
                />
            </div>
        </Slider>
      ) : (
        <Slider { ...settingsFull }>
            <div>
                <Card 
                    image={require('../images/jeans.png')}
                    title="Ropa adecuada"
                    text="Las telas gruesas, camisas manga larga, pantalones y faldas largas protegen mucho más. Igual los colores oscuros. Si puedes ver la luz a través de la tela, los rayos UV también lo harán."
                />
            </div>
            <div>
                <Card 
                    image={require('../images/sweater.png')}
                    title="Ropa especial"
                    text="Tienen un factor de protección a la radiación ultravioleta (UPF). Si la etiqueta indica 1800 UPF significa que solo permite que 1/1800 de rayos ultravioleta lleguen a la piel."
                />
            </div>
            <div>
                <Card 
                    image={require('../images/sunglasses.png')}
                    title="Lentes de sol"
                    text="No escatimes en su calidad, invierte lo necesario en la protección de tus ojos y la piel de tus párpados. Debes protegerlos al 100% de los rayos UVA y UVB."
                />
            </div>
        </Slider>
      )}
        
      </div>
    );
  }
}