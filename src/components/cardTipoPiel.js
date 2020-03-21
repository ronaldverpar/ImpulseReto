import React from 'react'
import './cardTipoPiel.css'

export default class CardTipoPiel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    componentDidMount() {
        if (this.props.id === "3") {
            this.setState({ active: true }); 
        }
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        let className = this.state.active ? 'TipoPielBox' : (this.props.id === '1' ? 'TipoPielBoxSmall TipoPielFirstItem' : (this.props.id === '6' ? 'TipoPielBoxSmall TipoPielLastItem' : 'TipoPielBoxSmall'));
        let classBoxColor = this.state.active ? 'TipoPielBoxColorSelected' : 'TipoPielBoxColor'
        let classNameInfo = this.state.active ? 'TipoPielBoxInfo' : 'TipoPielBoxInactive'
        let classPielBoxFace = this.state.active ? 'TipoPielBoxFaceActive' : 'TipoPielBoxFace'

        return (
            <div onClick={this.toggleClass.bind(this)} className={className}>
                <div className={classBoxColor} style={this.props.styleface}>
                    <div className={classPielBoxFace}>
                        <img src={this.props.image} style={{ opacity: "50%" }} />
                        <div className={!this.state.active ? "TipoPielMarco" : "TipoPielMarcoInactive"} style={this.props.styleface}/>
                    </div>
                    <div className={classNameInfo}>
                        <div className="TipoPielBoxTitle">
                            <h4>{this.props.title}</h4>
                            <h5>{this.props.subtitle}</h5>
                        </div>
                        <p>{this.props.info}</p>
                    </div>
                </div>
            </div>);
    }
}