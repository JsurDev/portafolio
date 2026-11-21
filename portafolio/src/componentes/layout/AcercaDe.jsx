import "./AcercaDe.css";

const AcercaDe = () => {
  return (
    <>
      <section className="acerca-de" id="acerca-de">
        <div className="grid">
          <div className="col-1">
            <div className="fotos">
              <img src="./assets/fondo.jpg" alt="" className="foto" />
              <img src="./assets/fondo.jpg" alt="" className="foto" />
            </div>
          </div>
          <div className="col-2">
            <h4 className="pre-titulo">Ingenieria en sistemas</h4>
            <h3 className="titulo">Nunca dejamos de aprender</h3>
            <p className="resumen">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              facere aliquam iste dolore iusto, nemo aut nostrum facilis .
            </p>
            <p className="resumen">
              nam natus nobis, ex laboriosam perferendis nisi incidunt eligendi
              autem corporis voluptatibus.
            </p>
            <a href="" className="boton">
              Necesitas ayuda?
              <span className="icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcercaDe;
