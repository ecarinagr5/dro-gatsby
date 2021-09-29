import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ siteTitle }) => (
  <header>
    <div className="wrap-menu">
      <div className="item--menu mobile-header">
        <div className="logo">{ siteTitle }</div>
        <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
      <div class="item--menu">
      <div class="sub-itemm mobile">
          <a href="" target="_self">
            <span className="logo">{ siteTitle }</span>
          </a>
        </div>
        <div class="sub-itemm">
          <a href="" target="_self">
            <span>INICIO</span>
          </a>
        </div>
        <div class="sub-itemm">
          <a href="#quienesSomos" target="_self">
            <span>¿Quiénes somos?</span>
          </a>
        </div>
        <div class="sub-itemm">
          <a href="#quehacemos" target="_self">
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

        <div className="sub-itemm mobile-redes">
          <div className="line-help"></div>
            <span className="txt-highlight">síguenos en nuestras redes</span>
            <div className="wrap-redes">
              <div className="item-redes">
                <a href="" target="_self">
                  <StaticImage
                    src="../images/iconos/facebook-logo.png"
                    width={34}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="DRO facebook" 
                  />
                </a>
              </div>
              <div className="item-redes">
                <a href="" target="_self">
                <StaticImage
                    src="../images/iconos/instragram.png"
                    width={34}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="DRO instagram" 
                  />
                </a>
              </div>
              <div className="item-redes">
                <a href="" target="_self">
                <StaticImage
                    src="../images/iconos/linkedin.png"
                    width={34}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="DRO linkedin" 
                  />
                </a>
              </div>
            </div>
            <a href="" target="_blank">
              <p className="txt-mini">contacto@agencia-dro.com</p>
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
