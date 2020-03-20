import React from 'react'
import './cardTipoPiel.css'

export default class CardTipoPiel extends React.Component {
    constructor(props) {
        super(props);
        //this.addActiveClass = this.addActiveClass.bind(this);
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
        //let className = this.state.active ? 'TipoPielBox' : 'TipoPielBoxSmall';
        let className = this.state.active ? 'TipoPielBox' : (this.props.id === '1' ? 'TipoPielBoxSmall TipoPielFirstItem' : (this.props.id === '6' ? 'TipoPielBoxSmall TipoPielLastItem' : 'TipoPielBoxSmall'));
        let classBoxColor = this.state.active ? 'TipoPielBoxColorSelected' : 'TipoPielBoxColor'
        let classNameInfo = this.state.active ? 'TipoPielBoxInfo' : 'TipoPielBoxInactive'
        let classPielBoxFace = this.state.active ? 'TipoPielBoxFaceActive' : 'TipoPielBoxFace'

        return (
            <div onClick={this.toggleClass.bind(this)} className={className}>
                <div className={classBoxColor} style={this.props.styleface}>
                    <div className={classPielBoxFace}>
                        <img src={this.props.image} />
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


// constructor(props) {
//     super(props);
//     this.addActiveClass= this.addActiveClass.bind(this);
//     this.state = {
//         active: false,
//     };
// }
// toggleClass() {
//     const currentState = this.state.active;
//     this.setState({ active: !currentState });
// };

// render() {
//     let className = this.state.active ? 'TipoPielBox' : 'TipoPielBoxSmall';
//     let classBoxColor = this.state.active ? 'TipoPielBoxColorSelected' : 'TipoPielBoxColor'
//     let classNameInfo = this.state.active ? 'TipoPielBoxInfo' : 'TipoPielBoxInactive'

//     return (
//         <div onClick={this.toggleClass} className={className}>
//             <div className={classBoxColor} style={this.props.styleface}>
//                 <div className="TipoPielBoxFace">
//                     <img src={this.props.image} />
//                 </div>
//                 <div className={classNameInfo}>
//                     <div className="TipoPielBoxTitle">
//                         <h4>{this.props.title}</h4>
//                         <h5>{this.props.subtitle}</h5>
//                     </div>
//                     <p>{this.props.info}</p>
//                 </div>
//             </div>
//         </div>);
// }


// const CardTipoPiel = props => (
//     <div className={props.activeCardTipoPiel ? "TipoPielBox" : "TipoPielBoxSmall"}>
//         <div className={props.activeCardTipoPiel ? "TipoPielBoxColorSelected" : "TipoPielBoxColor"} style={props.styleface} />
//         <div className="TipoPielBoxFace">
//             <img src={props.image} />
//         </div>
//         <div className={props.activeCardTipoPiel ? "TipoPielBoxInfo" : "TipoPielBoxInactive"}>
//             <div className="TipoPielBoxTitle">
//                 <h4>{props.title}</h4>
//                 <h5>{props.subtitle}</h5>
//             </div>
//             <p>{props.info}</p>
//         </div>
//     </div>
// )

//export default CardTipoPiel