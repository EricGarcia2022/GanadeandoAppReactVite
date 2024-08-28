/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';

const Conocenos = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <a href="#" className="logo nav-link" src="/img/logo Ganadeando app.png"></a>
          <button className="nav-toggle" aria-label="Abrir menú">
            <i className="fas fa-bars"></i>
          </button>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <a href="/html/Conocenos.html" className="nav-menu-link nav-link">
                Conócenos
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="/html/Contatcto.html" className="nav-menu-link nav-link">
                Contacto
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="/html/AnimalBovino.html" className="nav-menu-link nav-link">
                Animal Bovino
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="/html/index.html" className="nav-menu-link nav-link nav-menu-link_active">
                Registrarse
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <body>
        <div className="container">
          <div className="mySlides">
            <img src="/img/Alimentación.png" alt="imagen-1" width="800px" height="400px" />
            <h3>Nutrición Bovina</h3>
            <p>
              La aplicación Web permite llevar un control en la alimentación en los bovinos, permitiendo tener una trazabilidad de la alimentación diaria.
            </p>
          </div>
          <div className="mySlides">
            <img src="/img/Vacunación.png" alt="" width="800px" height="400px" />
            <h3>Vacunación</h3>
            <p>
              Llevar control en la vacunación ayuda en gran medida a reducir enfermedades, y la mortalidad animal.
            </p>
          </div>
          <div className="mySlides">
            <img src="/img/Nacimientos.png" alt="" width="800px" height="400px" />
            <h3>Nacimientos</h3>
            <p>
              Llevar el control de los nuevos nacimientos permite un mayor desarrollo para nuestros finqueros.
            </p>
          </div>
          <div className="mySlides">
            <img src="/img/Ordeño.png" alt="" width="800px" height="400px" />
            <h3>Producción láctea</h3>
            <p>
              Registrar la producción láctea de tu ganado te permite calcular de manera eficaz el punto de equilibrio para que tu finca sea autosotenible y altamente productiva.
            </p>
          </div>
          {/* Funcionalidad de carrusel con referencias a JavaScript */}
          <a className="prev" onClick={() => plusSlides(-1)}>
            &#10094;
          </a>
          {/* Me permite ir hacia atrás */}
          <a className="next" onClick={() => plusSlides(1)}>
            &#10095;
          </a>
          {/* Me permite ir hacia adelante */}
          <div className="elements">
            <span className="quadrate" onClick={() => currentSlide(1)}></span>
            {/* Me permite con relizar un click en cada imagen y mostrarla */}
            <span className="quadrate" onClick={() => currentSlide(2)}></span>
            {/* Me permite con relizar un click en cada iamgen y */}
            <span className="quadrate" onClick={() => currentSlide(3)}></span>
          </div>
        </div>
      </body>
      <footer>
        <br />
        <div className="redes-sociales">Ganadeando App</div>
        <div className="copyright"> 2022 Todos los derechos reservados.</div>
      </footer>
    </div>
  );
};

export default Conocenos;