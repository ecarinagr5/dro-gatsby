import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

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
    </section>
    {/* consigue clientes */}
    <section>
      <div class="wrap-us">
        <div class="item-us">
          <StaticImage
            src="../images/business.png"
            width={400}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div class="item-us">
          <div class="wrap-s">
            <div class="row">
              <span class="sub">
                Consigue clientes al menor coste de adquisición (CPA) posible
              </span>
              <p class="txt">
                Aumentando la captación de clientes a través de un óptimo
                posicionamiento orgánico, que sigue siendo la fuente de tráfico
                más rentable.
              </p>
              <a href="" target="_self">
                <p class="btn-call">conseguir clientes</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* maximo */}
      <div class="wrap-us">
        <div class="item-us mobile">
          <StaticImage
            src="../images/segmentar.png"
            width={400}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div class="item-us">
          <div class="wrap-s">
            <div class="row">
              <span class="sub">
                Saca el máximo rendimiento a tu principal activo: la base de
                clientes
              </span>
              <p class="txt">
                Segmentálos según su comportamiento para dirigirles campañas
                personalizadas de captación y fidelización, multiplicando así la
                efectividad del impacto y los resultados.
              </p>
              <a href="" target="_self">
                <p class="btn-call">segmentar clientes</p>
              </a>
            </div>
          </div>
        </div>
        <div class="item-us desktop">
          <StaticImage
            src="../images/segmentar.png"
            width={400}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
      </div>
      {/* aumenta */}
      <div class="wrap-us">
        <div class="item-us">
          <StaticImage
            src="../images/disenar.png"
            width={400}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div class="item-us">
          <div class="wrap-s">
            <div class="row">
              <span class="sub">
                Aumenta el valor promedio del cliente (CLTV) automatizando tus
                campañas a clientes
              </span>
              <p class="txt">
                diseñando estrategias personalizadas que te ayuden a mejorar la
                tasa de conversión, el ticket promedio y el CLTV.
              </p>
              <a href="" target="_self">
                <p class="btn-call">diseñar mi estrategía</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* aumenta */}
      <div class="wrap-us">
        <div class="item-us mobile">
          <StaticImage
            src="../images/panel.png"
            width={400}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div class="item-us">
          <div class="wrap-s">
            <div class="row">
              <span class="sub">
                Ten a mano toda la información de tu negocio y tus campañas para
                poder tomar decisiones
              </span>
              <p class="txt">
                A través de un panel de control que te permita ver como va tu
                negocio de un solo vistazo y en tiempo real.
              </p>
              <a href="" target="_self">
                <p class="btn-call">diseñar mi estrategía</p>
              </a>
            </div>
          </div>
        </div>
        <div class="item-us desktop">
          <StaticImage
            src="../images/panel.png"
            width={400}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
      </div>
      <div id="quienesSomos"></div>
    </section>
    {/* Quienes somos*/}
    <section >
      <h2>¿QUIÉNES SOMOS?</h2>
      <p class="txt--describe">
        Tras más de 15 años en digital, trabajando tanto en agencia, consultora
        como en cliente, decidimos crear agencia DRO para poner a disposición de
        la PyME mexicana todo el expertise en ecommerce adquirido en decenas de
        proyectos, tanto en España como en México. Ponemos a disposición de la
        PyME mexicana el conocimiento y la experiencia a las que solo pueden
        acceder las grandes compañías. Queremos democratizar el mundo del
        ecommerce, para que los más pequeños puedan competir con los grandes en
        igualdad de condiciones.
      </p>
      <div class="wrap-card">
        <div class="item-card">
          <h3>MISIÓN</h3>
          <p>
            Ayudar a la PyME mexicana a optimizar el comportamiento de su canal
            digital.
          </p>
        </div>
        <div class="item-card">
          <h3>VISIÓN</h3>
          <p>Ser la agencia líder en DRO, Digital Return Optimization.</p>
        </div>
        <div class="item-card">
          <h3>VALORES</h3>
          <p>
            Honestidad, compromiso, independencia y servicio en busca siempre de
            aportar el máximo valor a nuestros clientes.
          </p>
        </div>
      </div>
    </section>

    <section id="quehacemos">
      <div class="container">
        <div class="desc">
          <div class="heading">
            <h2>¿QUÉ HACEMOS?</h2>
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
              <StaticImage
                  src="../images/iconos/nube.png"
                  width={40}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="A Gatsby astronaut"
                  style={{ marginBottom: `1.45rem` }}
                />
                <p class="service-txt">1.	Conseguimos el menor coste de adquisición de clientes posible a través del trafico orgánico o SEO</p>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
              <StaticImage
                  src="../images/iconos/send.png"
                  width={40}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="A Gatsby astronaut"
                  style={{ marginBottom: `1.45rem` }}
                />
                <p class="service-txt">2.	Segmentamos y tratamos a los clientes según su comportamiento en la web. Poniendo foco en el 20% de clientes que nos aportan el 80% de las ventas, mediante la oportuna segmentación de clientes y análisis de la data.</p>
              </div>
            </div>
          </div>

          <div class="column" id="column-2">
            <div class="service">
              <div class="service-desc">
              <StaticImage
                  src="../images/iconos/transferir.png"
                  width={40}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="A Gatsby astronaut"
                  style={{ marginBottom: `1.45rem` }}
                />
                <p class="service-txt">3.	Aumentamos la tasa de conversión,  la recurrencia de compra, el ticket promedio y el tiempo de vida del cliente o Customer Lifetime Value.</p>
              </div>
            </div>
            <div class="service">
              <div class="service-desc">
              <StaticImage
                  src="../images/iconos/dato.png"
                  width={40}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="A Gatsby astronaut"
                  style={{ marginBottom: `1.45rem` }}
                />
                <p class="service-txt">4.	Tomamos decisiones basadas en data de una manera sencilla y rapida, mediante paneles de control que reflejen los principales kpis del negocio</p>
              </div>
            </div>

          </div>

          <div class="column" id="column-2">

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
);

export default IndexPage;
