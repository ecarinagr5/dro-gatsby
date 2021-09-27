import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section id="banner">
      <div class="wrap-header">
        <div class="item--h">
          <div>
            <h1>DRO</h1>
            <p class="txt-desc">
              Multiplica tus ventas en digital actuando sobre los tres pilares
              básicos del crecimiento
            </p>
          </div>
        </div>
        <div class="item--h">
          <div class="key-word">SEO</div>
          <div class="key-word">SEGMENTACIÓN DE CLIENTES</div>
          <div class="key-word">MARKETING AUTOMATION</div>
          <div class="atom">
            <div class="electron"></div>
            <div class="electron-alpha"></div>
            <div class="electron-omega"></div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h3 class="subtitle--es">
        Accede al conocimiento de los grandes ecommerce y úsalo para competir de
        igual a igual en internet y optimizar el rendimiento de tu canal
        digital.
      </h3>
      <div class="wrap-card">
        <div class="item-card">
          <h3>Consigue clientes al menor coste de adquisición (CPA) posible</h3>
          <p>
            aumentando la captación de clientes a través de un óptimo
            posicionamiento orgánico, que sigue siendo la fuente de tráfico más
            rentable.
          </p>
          <a href="" target="_self">
            <p class="btn-call">conseguir clientes</p>
          </a>
        </div>
        <div class="item-card">
          <h3>
            Saca el máximo rendimiento a tu principal activo: la base de
            clientes
          </h3>
          <p>
            Segmentálos según su comportamiento para dirigirles campañas
            personalizadas de captación y fidelización, multiplicando así la
            efectividad del impacto y los resultados.
          </p>
          <a href="" target="_self">
            <p class="btn-call">segmentar clientes</p>
          </a>
        </div>
        <div class="item-card">
          <h3>
            Aumenta el valor promedio del cliente (CLTV) automatizando tus
            campañas a clientes
          </h3>
          <p>
            diseñando estrategias personalizadas que te ayuden a mejorar la tasa
            de conversión, el ticket promedio y el CLTV.
          </p>
          <a href="" target="_self">
            <p class="btn-call">diseñar mi estrategia</p>
          </a>
        </div>
        <div class="item-card">
          <h3>
            Ten a mano toda la información de tu negocio y tus campañas para
            poder tomar decisiones
          </h3>
          <p>
            a través de un panel de control que te permita ver como va tu
            negocio de un solo vistazo y en tiempo real.
          </p>
          <a href="" target="_self">
            <p class="btn-call">ver panel</p>
          </a>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap-us">
        <div class="item-us">
          <h2>¿QUIENES SOMOS</h2>
          <p class="txt--describe">
            Tras más de 15 años en digital, trabajando tanto en agencia,
            consultora como en cliente, decidimos crear agencia DRO para poner a
            disposición de la PyME mexicana todo el expertise en ecommerce
            adquirido en decenas de proyectos, tanto en España como en México.
            Ponemos a disposición de la PyME mexicana el conocimiento y la
            experiencia a las que solo pueden acceder las grandes compañías.
            Queremos democratizar el mundo del ecommerce, para que los más
            pequeños puedan competir con los grandes en igualdad de condiciones.
          </p>
        </div>
        <div class="item-us">
          <div class="wrap-s">
            <div class="row">
              {/* img */}
              <span class="sub">MISIÓN</span>
              <p class="txt">
                Ayudar a la PyME mexicana a optimizar el comportamiento de su
                canal digital.
              </p>
            </div>
            <div class="row">
              {/* IMAGE*/}
              <span class="sub">VISIÓN</span>
              <p class="txt">
                Ser la agencia líder en DRO, Digital Return Optimization.
              </p>
            </div>
            <div class="row">
              {/* IMAGE*/}
              <span class="sub">MISIÓN</span>
              <p class="txt">
                Honestidad, compromiso, independencia y servicio en busca
                siempre de aportar el máximo valor a nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="our-services">
      <div class="container">
        <div class="desc">
          <div class="heading">
            <h2>QUE HACEMOS</h2>
          </div>
          <div class="text">
            <p>
              Multiplicamos las ventas actuando sobre los 3 pilares esenciales
              para el crecimiento del ecommerce.
            </p>
          </div>
        </div>
        <div class="services">
          <div class="column" id="column-1">
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-flask"> </i>
                <p class="service-txt">bussiniss intelegince</p>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-bullhorn"> </i>
                <p class="service-txt">digital marketing</p>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
                <i class="service-icon far fa-lightbulb"> </i>
                <p class="service-txt">PRODUCT DEVELOPMENT</p>
              </div>
            </div>
          </div>

          <div class="column" id="column-2">
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-wrench"> </i>
                <p class="service-txt">CRM CUSTOMAIZATION</p>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-database"> </i>
                <p class="service-txt">BUSINESS INTELLIGENCE</p>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-chart-pie"> </i>
                <p class="service-txt">DATA AQUSITION</p>
              </div>
            </div>
          </div>

          <div class="column" id="column-2">
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-tasks"> </i>
                <p class="service-txt">PROJECT MAGNEMENT</p>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
                <i class="service-icon fas fa-certificate"> </i>
                <p class="service-txt">SEO/SEM</p>
              </div>
            </div>
            <div class="service hidden">
              <div class="service-desc">
                <i class="service-icon"> </i>
                <p class="service-txt"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="clear-fix"></div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
