import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div class="wrap-menu">
      <div class="item--menu">
        <p class="logo">DRO</p>
      </div>
      <div class="item--menu">
        <div class="sub-itemm">
          <a href="" target="_self">
            <span>Home</span>
          </a>
        </div>
        <div class="sub-itemm">
          <a href="#quienesSomos" target="_self">
            <span>¿Quienes somos?</span>
          </a>
        </div>
        <div class="sub-itemm">
          <a href="" target="_self">
            <span>¿Qué hacemos?</span>
          </a>
        </div>
        <div class="sub-itemm">
          <a href="" target="_self">
            <span>¿Cómo lo hacemos?</span>
          </a>
        </div>
        <div class="sub-itemm">
          <a href="" target="_self">
            <span>Contáctanos</span>
          </a>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
