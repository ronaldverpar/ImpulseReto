import React from "react"
import "./cardTipoPiel.css"

export default class CardTipoPiel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      hover: false,
    }
  }

  componentDidMount() {
    if (this.props.id === "3") {
      this.setState({ active: true })
    }
  }

  hoverOn() {
    this.setState({ hover: true })
  }

  hoverOff() {
    this.setState({ hover: false })
  }

  toggleClass() {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }

  render() {
    let className =
      this.state.active || this.state.hover
        ? "TipoPielBox"
        : this.props.id === "1"
        ? "TipoPielBoxSmall TipoPielFirstItem"
        : this.props.id === "6"
        ? "TipoPielBoxSmall TipoPielLastItem"
        : "TipoPielBoxSmall"
    let classBoxColor =
      this.state.active || this.state.hover
        ? "TipoPielBoxColorSelected"
        : "TipoPielBoxColor"
    let classNameInfo =
      this.state.active || this.state.hover
        ? "TipoPielBoxInfo"
        : "TipoPielBoxInactive"
    let classPielBoxFace =
      this.state.active || this.state.hover
        ? "TipoPielBoxFaceActive"
        : "TipoPielBoxFace"
    let styleImage =
      this.state.active || this.state.hover
        ? { opacity: "100%" }
        : { opacity: "50%" }
    let styleFrame =
      this.state.active || this.state.hover
        ? "TipoPielMarcoInactive"
        : "TipoPielMarco"

    return (
      <div
        onClick={this.toggleClass.bind(this)}
        className={className}
        onMouseEnter={() => this.hoverOn()}
        onMouseLeave={() => this.hoverOff()}
      >
        <div className={classBoxColor} style={this.props.styleface}>
          <div className={classPielBoxFace}>
            <img src={this.props.image} style={styleImage} />
            <div className={styleFrame} style={this.props.styleface} />
          </div>
          <div className={classNameInfo}>
            <div className="TipoPielBoxTitle">
              <h4>{this.props.title}</h4>
              <h5>{this.props.subtitle}</h5>
            </div>
            <p>{this.props.info}</p>
          </div>
        </div>
      </div>
    )
  }
}
