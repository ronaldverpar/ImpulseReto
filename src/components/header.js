import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'
import { LogoOncoSalud, LogoGuardianes } from "./icons.js";

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  UNSAFE_componentWillMount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return(
      <header className={this.state.hasScrolled ?  'HeaderScroll' : ''}>
        <div className="HeaderGroup">
          <div className="HeaderLogos">
            <img src={require('../images/logo-impulse.png')} />
            <LogoOncoSalud className="ScreenStatus"/>
            <div className="Separator" />
            <LogoGuardianes className="ScreenStatus" />
          </div>
          <div className="HeaderButton">
            <button className="MainButton">Descarga Guía</button>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
